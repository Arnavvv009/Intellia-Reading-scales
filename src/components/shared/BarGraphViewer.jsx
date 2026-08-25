import React from 'react';

// Renders a scaled bar graph: gridlines are drawn per UNIT (not per real value),
// so the reader must use the scale key to convert grid-squares into real values —
// this is the core "Reading Scale" skill being taught.
export default function BarGraphViewer({
  dataset,
  width = 320,
  height = 220,
  highlightIndex = null,
  showValues = false,
  maxUnits = null,
}) {
  const { categories, scale, color, unitLabel } = dataset;
  const topUnits = maxUnits || Math.max(...categories.map(c => c.units)) + 1;

  const padding = { top: 20, right: 16, bottom: 44, left: 34 };
  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;
  const barGap = 14;
  const barW = (plotW - barGap * (categories.length - 1)) / categories.length;
  const unitH = plotH / topUnits;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} xmlns="http://www.w3.org/2000/svg">
      {/* Gridlines (one per unit, NOT per real value) */}
      {Array.from({ length: topUnits + 1 }).map((_, i) => {
        const y = padding.top + plotH - i * unitH;
        return (
          <g key={i}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text x={padding.left - 6} y={y + 4} fontSize="11" fontWeight="700" fill="#bca8f2" textAnchor="end" fontFamily="Nunito, sans-serif">{i}</text>
          </g>
        );
      })}

      {/* Axis lines */}
      <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + plotH} stroke="#ffffff" strokeWidth="1.5" />
      <line x1={padding.left} y1={padding.top + plotH} x2={width - padding.right} y2={padding.top + plotH} stroke="#ffffff" strokeWidth="1.5" />

      {/* Bars */}
      {categories.map((cat, i) => {
        const x = padding.left + i * (barW + barGap);
        const barH = cat.units * unitH;
        const y = padding.top + plotH - barH;
        const isHi = highlightIndex === i;
        return (
          <g key={cat.label}>
            <rect
              x={x} y={y} width={barW} height={barH}
              fill={isHi ? '#ffbe1a' : color}
              opacity={isHi ? 1 : 0.85}
              rx="3"
            />
            {showValues && (
              <text x={x + barW / 2} y={y - 6} fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle" fontFamily="Nunito, sans-serif">
                {cat.units * scale}
              </text>
            )}
            <text x={x + barW / 2} y={padding.top + plotH + 15} fontSize="12" fontWeight="700" fill="#ece9f5" textAnchor="middle" fontFamily="Nunito, sans-serif">
              {cat.emoji}
            </text>
            <text x={x + barW / 2} y={padding.top + plotH + 28} fontSize="10.5" fontWeight="700" fill="#bca8f2" textAnchor="middle" fontFamily="Nunito, sans-serif">
              {cat.label.length > 10 ? cat.label.slice(0, 9) + '…' : cat.label}
            </text>
          </g>
        );
      })}

      {/* Scale key */}
      <text x={width - padding.right} y={13} fontSize="11" fontWeight="800" fill="#ffbe1a" textAnchor="end" fontFamily="Nunito, sans-serif">
        Scale: 1 square = {scale} {unitLabel}
      </text>
    </svg>
  );
}
