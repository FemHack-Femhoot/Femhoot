import React from "react";

export default function PercentageCircle({ percent }) {
  return (
    <div
      x-data="scrollProgress"
      className="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
    >
      <svg className="w-80 h-80">
        <circle
          strokeWidth="20"
          fill="transparent"
          r="120"
          cx="160"
          cy="160"
          style={{
            stroke: "#FFB433",
          }}
        />
        <circle
          fill="none"
          r="120"
          cx="160"
          cy="160"
          style={{
            stroke: "#EB7159",
            strokeWidth: "20",
            transition: "all 0.3s",
            strokeDasharray: 120 * 2 * Math.PI,
            strokeDashoffset:
              120 * 2 * Math.PI - (percent / 100) * 120 * 2 * Math.PI,
            strokeLinecap: "round",
          }}
        />
      </svg>
      <span className="absolute text-7xl font-semibold text-femhoot-blue">{`${percent}%`}</span>
    </div>
  );
}
