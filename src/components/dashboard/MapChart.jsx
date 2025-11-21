// src/components/dashboard/MapChart.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import * as topojson from "topojson-client";

/*
  IMPORTANT:
  - Do NOT register ChartJS elements here. Register globally once (src/chartjs-setup.js).
  - Required registrations for choropleth: ChoroplethController, GeoFeature, ProjectionScale, ColorScale.
*/

// Recommended public GeoJSON (India states)
const TOPO_URL_REMOTE =
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson";

// If you have a local TopoJSON/GeoJSON file, set local path here (example):
// const TOPO_URL_LOCAL = "/path/to/your/india_states.topo.json";
// Use whichever you prefer below (remote vs local).
const TOPO_URL = TOPO_URL_REMOTE;

export default function MapChart({ data = [{ code: "mh", state: "Maharashtra", value: 4200 },
  { code: "ka", state: "Karnataka", value: 3100 },
  { code: "dl", state: "Delhi", value: 2700 },
  { code: "tn", state: "Tamil Nadu", value: 2500 },
  { code: "gj", state: "Gujarat", value: 1800 },
  { code: "rj", state: "Rajasthan", value: 1400 },
  { code: "wb", state: "West Bengal", value: 1200 },] /* e.g. [{ state: "Maharashtra", code:"MH", value:4200 }, ...] */ }) {
  const [geo, setGeo] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    let canceled = false;
    fetch(TOPO_URL)
      .then((r) => r.json())
      .then((json) => {
        if (canceled) return;
        // detect if topojson or geojson
        if (json.type && json.type.toLowerCase() === "topology") {
          // topojson -> convert to geojson features
          // choose first object key if available
          const firstObjKey = Object.keys(json.objects)[0];
          const geojson = topojson.feature(json, json.objects[firstObjKey]);
          setGeo(geojson);
        } else {
          // assume GeoJSON FeatureCollection
          setGeo(json);
        }
      })
      .catch((err) => {
        console.error("Failed to load India topo/geojson:", err);
      });
    return () => {
      canceled = true;
    };
  }, []);

  // Build lookup from provided data: match by code, name, or normalized name.
  const providedLookup = useMemo(() => {
    const m = new Map();
    (data || []).forEach((d) => {
      if (!d) return;
      const code = (d.code || "").toString().trim().toLowerCase();
      const name = (d.state || d.name || "").toString().trim().toLowerCase();
      if (code) m.set(code, d.value);
      if (name) m.set(name, d.value);
    });
    return m;
  }, [data]);

  const maxValue = useMemo(() => {
    if (!data || data.length === 0) return 1;
    const mx = Math.max(...data.map((d) => (d && typeof d.value === "number" ? d.value : 0)));
    return mx > 0 ? mx : 1;
  }, [data]);

  const chartData = useMemo(() => {
    if (!geo) return null;

    // ChartJS-Geo expects dataset.data = array aligned to geo.features
    const datasetData = geo.features.map((feature) => {
      // Common property names in India GeoJSONs: 'st_nm', 'STATE_NAME', 'name'
      const props = feature.properties || {};
      const candidates = [
        (props.st_nm || props.STATE_NAME || props.NAME || props.name || "").toString().trim().toLowerCase(),
        (props.state || "").toString().trim().toLowerCase(),
        (feature.id || "").toString().trim().toLowerCase(),
      ];

      let found = undefined;
      for (const c of candidates) {
        if (!c) continue;
        if (providedLookup.has(c)) {
          found = providedLookup.get(c);
          break;
        }
      }

      // fallback: 0 (no data for that state)
      return { feature, value: typeof found === "number" ? found : 0 };
    });

    return {
      datasets: [
        {
          label: "Sales by state",
          data: datasetData,
          outline: geo,
          borderColor: "rgba(255,255,255,0.6)",
          borderWidth: 0.35,
          backgroundColor: (ctx) => {
            // safe accessor
            const di = ctx.dataIndex;
            const item = ctx.dataset && ctx.dataset.data && ctx.dataset.data[di];
            if (!item || typeof item.value !== "number" || item.value <= 0) {
              return "rgba(241,245,249,0.95)"; // muted
            }
            const t = Math.min(1, item.value / maxValue);
            const start = [241, 245, 249];
            const end = [0, 229, 212]; // tealish
            const mix = (i) => Math.round(start[i] + (end[i] - start[i]) * t);
            return `rgba(${mix(0)}, ${mix(1)}, ${mix(2)}, 0.95)`;
          },
        },
      ],
    };
  }, [geo, providedLookup, maxValue]);

  const options = useMemo(() => {
    return {
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const di = ctx.dataIndex;
              const item = ctx.dataset && ctx.dataset.data && ctx.dataset.data[di];
              if (!item) return "";
              const props = item.feature.properties || {};
              const name = props.st_nm || props.STATE_NAME || props.NAME || props.name || item.feature.id || "Unknown";
              const value = typeof item.value === "number" ? item.value : 0;
              return `${name}: ${value.toLocaleString()}`;
            },
          },
        },
      },
      scales: {
        xy: {
          projection: "mercator" // india works fine with mercator; ensure ProjectionScale registered globally
        },
      },
      maintainAspectRatio: false,
    };
  }, []);

  if (!chartData) {
    return <div style={{ height: "420px" }}>Loading India map…</div>;
  }

  return (
    <div style={{ height: "420px" }}>
      <Chart ref={chartRef} type="choropleth" data={chartData} options={options} />
    </div>
  );
}
