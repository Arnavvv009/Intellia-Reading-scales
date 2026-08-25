import React from 'react';

// Renders a pictograph: each category is a row of repeated icons, where each icon
// represents `scale` real items — the reader must multiply icon-count x scale.
export default function PictographViewer({
  dataset,
  width = 320,
  height = 220,
  highlightIndex = null,
  showValues = false,
}) {
  const { categories, scale, icon, unitLabel } = dataset;
  const rowH = (height - 30) / categories.length;
  const iconSize = Math.min(20, rowH * 0.7);
  const labelW = 74;
  const maxUnits = Math.max(...categories.map(c => c.units));
  const iconGap = Math.min(18, (width - labelW - 40) / (maxUnits + 1));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} xmlns="http://www.w3.org/2000/svg">
      {categories.map((cat, i) => {
        const y = 14 + i * rowH + rowH / 2;
        const isHi = highlightIndex === i;
        return (
          <g key={cat.label}>
            <text x={4} y={y + 5} fontSize="12" fontWeight="700" fill={isHi ? '#ffbe1a' : '#ece9f5'} fontFamily="Nunito, sans-serif">
              {cat.emoji} {cat.label.length > 9 ? cat.label.slice(0, 8) + '…' : cat.label}
            </text>
            {Array.from({ length: cat.units }).map((_, j) => (
              <text
                key={j}
                x={labelW + j * iconGap}
                y={y + iconSize / 3}
                fontSize={iconSize}
                opacity={isHi ? 1 : 0.9}
              >
                {icon}
              </text>
            ))}
            {showValues && (
              <text x={width - 6} y={y + 5} fontSize="12" fontWeight="800" fill="#34d399" textAnchor="end" fontFamily="Nunito, sans-serif">
                = {cat.units * scale}
              </text>
            )}
          </g>
        );
      })}

      {/* Scale key */}
      <text x={4} y={height - 4} fontSize="11" fontWeight="800" fill="#ffbe1a" fontFamily="Nunito, sans-serif">
        Key: {icon} = {scale} {unitLabel}
      </text>
    </svg>
  );
}
