import React from 'react';

// Custom flat-vector "cartoon style" SVG illustrations for the Story phase, drawn at a
// 20:8 (5:2) wide banner ratio as requested. Built entirely from the app's own design
// tokens — no external raster images or network image-generation required.

const Banner = ({ children }) => (
  <svg viewBox="0 0 500 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bannerSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e205e" />
        <stop offset="100%" stopColor="#130a2a" />
      </linearGradient>
    </defs>
    <rect width="500" height="200" fill="url(#bannerSky)" />
    {children}
  </svg>
);

const Vertex = ({ x = 0, y = 0, scale = 1, pose = 'idle' }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    <rect x="-22" y="0" width="44" height="42" rx="9" fill="#2d1c69" stroke="#4d3b84" strokeWidth="2" />
    <rect x="-17" y="5" width="34" height="32" rx="5" fill="#1b103c" />
    <circle cx="-7" cy="18" r="3.5" fill="#00f3ff" />
    <circle cx="9" cy="18" r="3.5" fill="#00f3ff" />
    <path d="M-5 29 Q1 34 7 29" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="-3" y="-14" width="6" height="14" fill="#4d3b84" rx="2" />
    <circle cx="0" cy="-16" r="4" fill="#ffbe1a" />
    {pose === 'point' && <line x1="22" y1="20" x2="46" y2="6" stroke="#2d1c69" strokeWidth="6" strokeLinecap="round" />}
  </g>
);

// Slide 1: Vertex surveying fruit choices with a clipboard — intro to data collection
export const Slide1Illustration = () => (
  <Banner>
    <circle cx="40" cy="30" r="2.5" fill="#ffbe1a" opacity="0.8" />
    <circle cx="460" cy="24" r="2" fill="#ffffff" opacity="0.6" />
    <rect x="0" y="168" width="500" height="12" fill="#1b103c" />

    <Vertex x="90" y="110" pose="point" />

    {/* Clipboard */}
    <g transform="translate(140,90)">
      <rect x="0" y="0" width="46" height="60" rx="4" fill="#ece9f5" stroke="#bca8f2" strokeWidth="2" />
      <rect x="14" y="-6" width="18" height="10" rx="3" fill="#a78bfa" />
      <line x1="8" y1="16" x2="38" y2="16" stroke="#2d1c69" strokeWidth="2" />
      <line x1="8" y1="26" x2="38" y2="26" stroke="#2d1c69" strokeWidth="2" />
      <line x1="8" y1="36" x2="30" y2="36" stroke="#2d1c69" strokeWidth="2" />
    </g>

    {/* Fruit icons floating, being "counted" */}
    <text x="230" y="70" fontSize="26">🍎</text>
    <text x="270" y="100" fontSize="26">🍊</text>
    <text x="230" y="130" fontSize="26">🍌</text>
    <text x="300" y="60" fontSize="26">🥭</text>
    <text x="320" y="120" fontSize="26">🍎</text>

    {/* Mini bar graph silhouette on the right */}
    <g transform="translate(380,60)">
      <rect x="0" y="70" width="18" height="40" fill="#ff8a50" opacity="0.85" rx="2" />
      <rect x="24" y="50" width="18" height="60" fill="#34d399" opacity="0.85" rx="2" />
      <rect x="48" y="85" width="18" height="25" fill="#a78bfa" opacity="0.85" rx="2" />
      <rect x="72" y="30" width="18" height="80" fill="#ffbe1a" opacity="0.85" rx="2" />
      <line x1="-4" y1="110" x2="96" y2="110" stroke="#ffffff" strokeWidth="2" />
    </g>
  </Banner>
);

// Slide 2: Reading a bar graph with a scale key of 1 square = 2
export const Slide2Illustration = () => (
  <Banner>
    <Vertex x="60" y="140" pose="point" scale="0.9" />

    <g transform="translate(150,30)">
      {/* Gridlines */}
      {[0, 1, 2, 3, 4].map(i => (
        <line key={i} x1="0" y1={120 - i * 24} x2="260" y2={120 - i * 24} stroke="rgba(255,255,255,0.12)" />
      ))}
      <line x1="0" y1="0" x2="0" y2="120" stroke="#ffffff" strokeWidth="2" />
      <line x1="0" y1="120" x2="260" y2="120" stroke="#ffffff" strokeWidth="2" />

      {/* Bars: 2, 3, 4 units tall */}
      <rect x="24" y="72" width="34" height="48" fill="#ff8a50" rx="3" />
      <rect x="90" y="48" width="34" height="72" fill="#34d399" rx="3" />
      <rect x="156" y="24" width="34" height="96" fill="#ffbe1a" rx="3" />

      <text x="41" y="134" fontSize="11" textAnchor="middle" fill="#bca8f2">🍊</text>
      <text x="107" y="134" fontSize="11" textAnchor="middle" fill="#bca8f2">🍎</text>
      <text x="173" y="134" fontSize="11" textAnchor="middle" fill="#bca8f2">🍌</text>
    </g>

    <g transform="translate(150,10)">
      <text x="0" y="0" fontSize="12" fontWeight="800" fill="#ffbe1a">Scale: 1 square = 2 children</text>
    </g>

    <g transform="translate(420,80)">
      <circle r="34" fill="#1b103c" stroke="#ffbe1a" strokeWidth="2" />
      <text x="0" y="-4" fontSize="16" fontWeight="900" textAnchor="middle" fill="#ffffff">4×2</text>
      <text x="0" y="14" fontSize="14" fontWeight="900" textAnchor="middle" fill="#34d399">= 8</text>
    </g>
  </Banner>
);

// Slide 3: Reading a pictograph with icons, key = 5
export const Slide3Illustration = () => (
  <Banner>
    <Vertex x="60" y="150" pose="idle" scale="0.9" />

    <g transform="translate(140,50)">
      <text x="0" y="8" fontSize="11" fill="#ece9f5">🐶 Dog</text>
      <text x="50" y="10" fontSize="18">🐾🐾🐾</text>

      <text x="0" y="38" fontSize="11" fill="#ece9f5">🐱 Cat</text>
      <text x="50" y="40" fontSize="18">🐾🐾🐾🐾</text>

      <text x="0" y="68" fontSize="11" fill="#ece9f5">🐠 Fish</text>
      <text x="50" y="70" fontSize="18">🐾🐾🐾🐾🐾🐾</text>

      <text x="0" y="100" fontSize="11" fontWeight="800" fill="#ffbe1a">Key: 🐾 = 5 pets</text>
    </g>

    <g transform="translate(420,90)">
      <circle r="36" fill="#1b103c" stroke="#34d399" strokeWidth="2" />
      <text x="0" y="-6" fontSize="14" fontWeight="900" textAnchor="middle" fill="#ffffff">6×5</text>
      <text x="0" y="14" fontSize="15" fontWeight="900" textAnchor="middle" fill="#34d399">= 30</text>
    </g>
  </Banner>
);

// Slide 4: Comparing categories, finding totals and differences
export const Slide4Illustration = () => (
  <Banner>
    <Vertex x="440" y="150" pose="idle" scale="0.9" />

    <g transform="translate(40,30)">
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={i} x1="0" y1={120 - i * 20} x2="300" y2={120 - i * 20} stroke="rgba(255,255,255,0.1)" />
      ))}
      <line x1="0" y1="0" x2="0" y2="120" stroke="#ffffff" strokeWidth="2" />
      <line x1="0" y1="120" x2="300" y2="120" stroke="#ffffff" strokeWidth="2" />

      <rect x="20" y="60" width="34" height="60" fill="#ff8a50" rx="3" />
      <rect x="80" y="20" width="34" height="100" fill="#34d399" rx="3" />
      <rect x="140" y="80" width="34" height="40" fill="#a78bfa" rx="3" />
      <rect x="200" y="40" width="34" height="80" fill="#ffbe1a" rx="3" />

      {/* Comparison arrow between tallest and shortest */}
      <path d="M97 15 L217 35" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow)" />
      <text x="150" y="10" fontSize="10" fill="#ef4444" fontWeight="800" textAnchor="middle">Most vs Least</text>
    </g>

    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 Z" fill="#ef4444" />
      </marker>
    </defs>
  </Banner>
);
