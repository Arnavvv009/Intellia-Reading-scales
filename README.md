# Intellia Reading Scale

Grade 2/3 Data Handling (Statistics) module — **Reading Scale**: reading
scaled bar graphs and pictographs, where each square or picture can stand
for more than one real item (e.g. 1 square = 2, 5, 10, or 100). Built as a
structural clone of the Intellia Angles / 3D Shapes modules (same
architecture, layout, styling, gamification, and audio pipeline) with
all-new content for the Reading Scale topic.

## Run locally

```bash
npm install
npm run dev
```

## Audio narration

Same three-tier ElevenLabs narration pipeline as the reference project
(static MP3 → live ElevenLabs API → Web Speech API fallback). Your
ElevenLabs API key is already set in `.env.local` (gitignored, never
committed).

To pre-generate static MP3 files for instant, zero-latency playback, run:

```bash
node scripts/generate_audio.js
```

This reads every narrated line from `src/utils/narration.js` and all 100
questions/hints/explanations from `src/data/questionBank.js`, generates one
MP3 per unique line, saves them to `public/assets/audio/`, and rewrites
`src/utils/audioMap.js` automatically. Until you run it, narration falls
back to a live ElevenLabs API call at runtime.

Run `node scripts/clean_audio.js` afterwards any time you edit narration
text, to remove orphaned MP3 files.

## What's new vs. the reference modules

- **Content**: All new — reading bar graphs and pictographs with a scale
  other than 1, finding the scale key, most/least, totals, differences,
  half-symbols, real-world (incl. Singapore-flavoured) data, and graph
  vocabulary. 100 questions across 10 worlds.
- **Interactive components**: `BarGraphViewer` and `PictographViewer`
  (static, scale-aware SVG chart renderers), `BarBuilder` (drag-to-set bar
  with a live "units × scale = value" readout, replacing the topic-specific
  drag component from earlier modules).
- **Story illustrations**: Custom inline SVG "cartoon style" art
  (`StoryIllustrations.jsx`), drawn at the requested **20:8 (5:2) wide
  banner ratio** — no external image assets or image-generation API were
  available in this environment, so these are hand-built flat-vector scenes
  in the app's own color palette rather than AI-generated raster images.
- **Everything else** (design tokens, layout, phase flow, XP/streak/badge
  system, quiz mechanics, audio engine) is unchanged from the reference
  modules for strict UI/UX fidelity.
