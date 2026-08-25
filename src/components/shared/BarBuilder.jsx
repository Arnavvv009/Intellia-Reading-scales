import React, { useRef, useState, useEffect } from 'react';

// Drag-to-set single bar against a gridded scale, mirroring the drag-interaction
// pattern used elsewhere in the app (pointer events, live readout).
export default function BarBuilder({
  scale = 5,
  unitLabel = 'items',
  maxUnits = 8,
  units,
  onChange,
  color = '#34D399',
  width = 160,
  height = 220,
}) {
  const [localUnits, setLocalUnits] = useState(units ?? 3);
  const stageRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (units !== undefined && units !== null) setLocalUnits(units);
  }, [units]);

  const padding = { top: 20, bottom: 30 };
  const plotH = height - padding.top - padding.bottom;
  const unitH = plotH / maxUnits;

  const updateFromPointer = (clientY) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relY = rect.bottom - padding.bottom * (rect.height / height) - clientY;
    const scaledY = relY / (rect.height / height);
    let u = Math.round(scaledY / unitH);
    u = Math.max(0, Math.min(maxUnits, u));
    setLocalUnits(u);
    if (onChange) onChange(u);
  };

  const onMouseDown = (e) => { isDragging.current = true; updateFromPointer(e.clientY); document.addEventListener('mousemove', onMouseMove); document.addEventListener('mouseup', onMouseUp); };
  const onMouseMove = (e) => { if (isDragging.current) updateFromPointer(e.clientY); };
  const onMouseUp = () => { isDragging.current = false; document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mouseup', onMouseUp); };
  const onTouchStart = (e) => { if (e.touches.length) { isDragging.current = true; updateFromPointer(e.touches[0].clientY); } };
  const onTouchMove = (e) => { if (isDragging.current && e.touches.length) updateFromPointer(e.touches[0].clientY); };
  const onTouchEnd = () => { isDragging.current = false; };

  const barH = localUnits * unitH;
  const barY = padding.top + plotH - barH;

  return (
    <div
      ref={stageRef}
      className="view-3d-stage"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'none', cursor: 'grab', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: maxUnits + 1 }).map((_, i) => {
          const y = padding.top + plotH - i * unitH;
          return (
            <g key={i}>
              <line x1={40} y1={y} x2={width - 10} y2={y} stroke="rgba(255,255,255,0.08)" />
              <text x={34} y={y + 3} fontSize="9" fill="#bca8f2" textAnchor="end" fontFamily="Nunito, sans-serif">{i}</text>
            </g>
          );
        })}
        <line x1={40} y1={padding.top} x2={40} y2={padding.top + plotH} stroke="#ffffff" strokeWidth="1.5" />
        <line x1={40} y1={padding.top + plotH} x2={width - 10} y2={padding.top + plotH} stroke="#ffffff" strokeWidth="1.5" />
        <rect x={60} y={barY} width={width - 90} height={barH} fill={color} rx="4" />
        <text x={(width - 30) / 2 + 40} y={barY - 8} fontSize="12" fontWeight="800" fill="#ffbe1a" textAnchor="middle" fontFamily="Nunito, sans-serif">
          {localUnits} × {scale} = {localUnits * scale}
        </text>
      </svg>
      <div style={{ fontSize: '10px', color: 'var(--text-muted-lavender)', marginTop: '4px' }}>
        Drag the bar up or down
      </div>
    </div>
  );
}
