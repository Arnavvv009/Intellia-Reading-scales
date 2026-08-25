import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';
import BarBuilder from '../shared/BarBuilder';
import BarGraphViewer from '../shared/BarGraphViewer';
import PictographViewer from '../shared/PictographViewer';
import { DATASETS, getDataset, categoryValue, datasetTotal, maxCategory, minCategory } from '../../data/graphData';

const SCALE_PRESETS = [2, 5, 10];

export default function SimulatePhase({ onNext, playSound, speak }) {
  const [station, setStation] = useState(0);
  const [completedStations, setCompletedStations] = useState([false, false, false, false]);

  useEffect(() => {
    if (station === 0) {
      speak("Welcome to the Scale Reader! Drag the bar and pick a scale to see how the real value changes.");
    } else if (station === 1) {
      speak("In the Pictograph Counter, count the pictures in each row and multiply by the key to find the real value.");
    } else if (station === 2) {
      speak("Let's match! Match each graph term on the left with its correct meaning on the right.");
    } else if (station === 3) {
      speak("Welcome to the Real-Life Data Sandbox! Pick a dataset and answer questions about it.");
    }
  }, [station, speak]);

  const markStationCompleted = (idx) => {
    setCompletedStations(prev => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  // -------------------------------------------------------------
  // STATION A: Scale Reader (Bar Builder)
  // -------------------------------------------------------------
  const [barUnits, setBarUnits] = useState(4);
  const [barScale, setBarScale] = useState(5);
  const [scaleTracks, setScaleTracks] = useState(new Set());
  const [targetValue] = useState(20);

  const handleScaleSelect = (s) => {
    setBarScale(s);
    playSound('explore');
    setScaleTracks(prev => {
      const next = new Set(prev);
      next.add(s);
      if (next.size === 3) markStationCompleted(0);
      return next;
    });
  };

  // -------------------------------------------------------------
  // STATION B: Pictograph Counter
  // -------------------------------------------------------------
  const checkerDataset = getDataset('icecream');
  const [checkerAnswers, setCheckerAnswers] = useState({});
  const [checkerCorrect, setCheckerCorrect] = useState({});

  const choicesFor = (cat) => {
    const correct = categoryValue(cat, checkerDataset.scale);
    const distractors = [correct - checkerDataset.scale, correct + checkerDataset.scale, cat.units].filter(v => v !== correct && v > 0);
    const options = [correct, ...distractors.slice(0, 2)];
    return options.sort((a, b) => a - b);
  };

  const handleCheckerGuess = (label, guess, correctVal) => {
    const isCorrect = guess === correctVal;
    setCheckerAnswers(prev => ({ ...prev, [label]: guess }));
    setCheckerCorrect(prev => {
      const next = { ...prev, [label]: isCorrect };
      if (isCorrect) playSound('correct'); else playSound('wrong');
      const allCorrect = checkerDataset.categories.every(c => next[c.label] === true);
      if (allCorrect) markStationCompleted(1);
      return next;
    });
  };

  // -------------------------------------------------------------
  // STATION C: Match & Sort
  // -------------------------------------------------------------
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [matches, setMatches] = useState({});

  const clueCards = [
    { text: "Tells you how much each square or picture is really worth", type: 'scale' },
    { text: "The tallest or biggest column of data in a bar graph", type: 'bar' },
    { text: "The name that tells you what the whole graph is about", type: 'title' },
  ];
  const labelCards = [
    { text: "Title", type: 'title' },
    { text: "Scale / Key", type: 'scale' },
    { text: "Bar", type: 'bar' },
  ];

  const handleMatchClick = (side, idx) => {
    if (side === 'left') {
      if (Object.keys(matches).includes(idx.toString())) return;
      setSelectedClue(idx);
      if (selectedLabel !== null) verifyMatch(idx, selectedLabel);
    } else {
      if (Object.values(matches).includes(idx)) return;
      setSelectedLabel(idx);
      if (selectedClue !== null) verifyMatch(selectedClue, idx);
    }
  };

  const verifyMatch = (clueIdx, labelIdx) => {
    const clue = clueCards[clueIdx];
    const label = labelCards[labelIdx];
    if (clue.type === label.type) {
      playSound('correct');
      setMatches(prev => {
        const next = { ...prev, [clueIdx]: labelIdx };
        if (Object.keys(next).length === 3) markStationCompleted(2);
        return next;
      });
    } else {
      playSound('wrong');
    }
    setSelectedClue(null);
    setSelectedLabel(null);
  };

  // -------------------------------------------------------------
  // STATION D: Real-Life Data Sandbox
  // -------------------------------------------------------------
  const sandboxDatasets = ['fruits', 'books', 'recycling', 'canteen'];
  const [sandboxId, setSandboxId] = useState('fruits');
  const sandboxDataset = getDataset(sandboxId);
  const [sandboxGuesses, setSandboxGuesses] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const sandboxQuestions = (ds) => {
    const max = maxCategory(ds);
    const min = minCategory(ds);
    return [
      { id: 'most', text: `Which has the MOST ${ds.unitLabel}?`, correct: max.label, options: ds.categories.map(c => c.label) },
      { id: 'least', text: `Which has the LEAST ${ds.unitLabel}?`, correct: min.label, options: ds.categories.map(c => c.label) },
      { id: 'total', text: `What is the TOTAL of all categories?`, correct: datasetTotal(ds).toString(), options: [datasetTotal(ds), datasetTotal(ds) - ds.scale, datasetTotal(ds) + ds.scale].map(String) },
    ];
  };

  const handleSandboxGuess = (qid, guess, correct) => {
    const isCorrect = guess === correct;
    setSandboxGuesses(prev => ({ ...prev, [qid]: { guess, correct: isCorrect } }));
    if (isCorrect) playSound('explore'); else playSound('wrong');
    const allCorrect = sandboxQuestions(sandboxDataset).every(q =>
      (sandboxGuesses[q.id]?.correct || (q.id === qid && isCorrect))
    );
    if (allCorrect) markStationCompleted(3);
  };

  const switchSandboxDataset = (id) => {
    setSandboxId(id);
    setSandboxGuesses({});
    setShowAnswers(false);
    playSound('explore');
    speak(getDataset(id).title);
  };

  const currentStationComplete = completedStations[station];

  return (
    <div style={{ width: '100%' }}>
      <div className="simulate-header">
        <h2 className="simulate-heading">✏️ Simulate</h2>
        <p className="simulate-sub">Explore and discover — no wrong answers!</p>
      </div>

      <div className="simulate-tabs">
        {[
          { id: 0, label: "Scale Reader", badge: "A", color: "#a78bfa" },
          { id: 1, label: "Pictograph Counter", badge: "B", color: "#34d399" },
          { id: 2, label: "Match & Sort", badge: "C", color: "#ffbe1a" },
          { id: 3, label: "Real-Life Data Sandbox", badge: "D", color: "#ff8a50" }
        ].map((tab) => (
          <div key={tab.id} className={`sim-tab ${station === tab.id ? 'sim-tab--active' : ''}`} onClick={() => setStation(tab.id)}>
            <div className="sim-tab-badge" style={{ backgroundColor: tab.color }}>{tab.badge}</div>
            <span style={{ fontSize: '13px', fontWeight: '700' }}>{tab.label}</span>
            {completedStations[tab.id] && <span style={{ color: 'var(--accent-success-green)' }}>✓</span>}
          </div>
        ))}
      </div>

      <div className="main-card" style={{ minHeight: '280px' }}>

        {/* ================= STATION A: SCALE READER ================= */}
        {station === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title"><span>📏</span> Scale Reader</h3>
            <p className="sim-station-instruction">Drag the bar, then try each scale to see how the real value changes!</p>

            <div className="shape-selector-row">
              {SCALE_PRESETS.map((s) => (
                <button
                  key={s}
                  className={`shape-selector-btn ${barScale === s ? 'shape-selector-btn--active' : ''}`}
                  onClick={() => handleScaleSelect(s)}
                >
                  Scale = {s}
                </button>
              ))}
            </div>

            <BarBuilder units={barUnits} onChange={setBarUnits} scale={barScale} unitLabel="items" maxUnits={8} />

            <div className="property-live-tally">
              <div className="tally-row">
                <span className="tally-item" style={{ color: '#34d399' }}>
                  {barUnits} squares × {barScale} = {barUnits * barScale}
                </span>
              </div>
              <div className="tally-classification">
                The bar covers {barUnits} squares. Since each square is worth {barScale}, the real value is {barUnits * barScale}.
              </div>
            </div>

            <Mascot mood="thinking" bubble="Try all three scales on the same bar — watch how the real value changes even though the bar looks the same height!" />
          </div>
        )}

        {/* ================= STATION B: PICTOGRAPH COUNTER ================= */}
        {station === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title"><span>🎯</span> Pictograph Counter</h3>
            <p className="sim-station-instruction">Count the pictures in each row, then pick the correct real value.</p>
 
            <div className="physics-sandbox" style={{ gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <PictographViewer dataset={checkerDataset} width={360} height={180} highlightIndex={null} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {checkerDataset.categories.map((cat) => {
                  const correctVal = categoryValue(cat, checkerDataset.scale);
                  const options = choicesFor(cat);
                  const guess = checkerAnswers[cat.label];
                  const correct = checkerCorrect[cat.label];
                  return (
                    <div key={cat.label} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
                      padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>{cat.emoji} {cat.label}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          {options.map((opt) => (
                            <button
                              key={opt}
                              className={`btn-highlight-toggle ${guess === opt ? 'btn-highlight-toggle--active' : ''}`}
                              style={{ padding: '6px 12px', fontSize: '13px', width: 'auto', minWidth: '58px' }}
                              onClick={() => handleCheckerGuess(cat.label, opt, correctVal)}
                              disabled={correct === true}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        {correct === true && <span style={{ fontSize: '13px', color: 'var(--accent-success-green)', fontWeight: '800' }}>✓ Correct</span>}
                        {correct === false && guess !== undefined && <span style={{ fontSize: '13px', color: 'var(--accent-alert-coral)', fontWeight: '800' }}>Retry</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Mascot mood="thinking" bubble={`Remember: Key is ${checkerDataset.icon} = ${checkerDataset.scale} ${checkerDataset.unitLabel}. Count the pictures, then multiply!`} />
          </div>
        )}

        {/* ================= STATION C: MATCH & SORT ================= */}
        {station === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title"><span>🧩</span> Match & Sort</h3>
            <p className="sim-station-instruction">Match each clue on the left with the correct graph term on the right.</p>

            <div className="unfold-sandbox" style={{ gap: '14px' }}>
              <div style={{
                width: '100%', height: '70px', backgroundColor: 'var(--surface-pill-darkest)',
                border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '14px', display: 'flex',
                alignItems: 'center', justifyContent: 'center', fontSize: '16px', color: 'var(--accent-gold)',
                fontWeight: '700', gap: '8px', textAlign: 'center', padding: '0 14px'
              }}>
                {selectedClue !== null ? (
                  <><span>🎁 Clue:</span><span>{clueCards[selectedClue].text}</span></>
                ) : (
                  <span>Select a card on the left to start matching!</span>
                )}
              </div>

              <div className="matching-game" style={{ marginTop: '10px', gap: '16px' }}>
                <div className="match-left" style={{ gap: '10px' }}>
                  {clueCards.map((clue, i) => {
                    const isMatched = Object.keys(matches).includes(i.toString());
                    const isSelected = selectedClue === i;
                    return (
                      <div key={i} className={`match-card ${isSelected ? 'match-card--selected' : ''} ${isMatched ? 'match-card--completed' : ''}`} style={{ padding: '12px 16px', fontSize: '15px' }} onClick={() => handleMatchClick('left', i)}>
                        <span>{clue.text}</span>
                        {isMatched && <span>✓</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="match-right" style={{ gap: '10px' }}>
                  {labelCards.map((label, i) => {
                    const matchValue = Object.values(matches).indexOf(i);
                    const isMatched = matchValue !== -1;
                    const isSelected = selectedLabel === i;
                    return (
                      <div key={i} className={`match-card ${isSelected ? 'match-card--selected' : ''} ${isMatched ? 'match-card--completed' : ''}`} style={{ padding: '12px 16px', fontSize: '15px' }} onClick={() => handleMatchClick('right', i)}>
                        <span>{label.text}</span>
                        {isMatched && <span>Matched</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Mascot mood="thinking" bubble="A graph needs a Title, a Scale, and Bars (or Pictures) to make sense!" />
          </div>
        )}

        {/* ================= STATION D: REAL-LIFE DATA SANDBOX ================= */}
        {station === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title"><span>🌍</span> Real-Life Data Sandbox</h3>
            <p className="sim-station-instruction">Pick a dataset, then answer the questions about it.</p>

            <div className="shape-selector-row" style={{ height: 'auto', marginBottom: '10px', gap: '8px' }}>
              {sandboxDatasets.map((id) => (
                <button
                  key={id}
                  className={`shape-selector-btn ${sandboxId === id ? 'shape-selector-btn--active' : ''}`}
                  onClick={() => switchSandboxDataset(id)}
                >
                  {getDataset(id).icon} {getDataset(id).title.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>

            <div className="physics-sandbox" style={{ gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                {sandboxDataset.type === 'bar' ? (
                  <BarGraphViewer dataset={sandboxDataset} width={360} height={180} showValues={showAnswers} />
                ) : (
                  <PictographViewer dataset={sandboxDataset} width={360} height={180} showValues={showAnswers} />
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                {sandboxQuestions(sandboxDataset).map((q) => {
                  const state = sandboxGuesses[q.id];
                  return (
                    <div key={q.id} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
                      padding: '8px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>{q.text}</div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {q.options.map((opt) => {
                          const optStr = opt.toString();
                          let cls = 'sandbox-toggle-btn';
                          if (state && state.guess === optStr) cls += state.correct ? ' sandbox-toggle-btn--yes' : ' sandbox-toggle-btn--no';
                          return (
                            <button
                              key={optStr}
                              className={cls}
                              style={{ padding: '6px 12px', fontSize: '13px', width: 'auto', minWidth: '58px', maxWidth: 'none' }}
                              onClick={() => handleSandboxGuess(q.id, optStr, q.correct.toString())}
                            >
                              {optStr}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="watch-it-btn" onClick={() => { setShowAnswers(true); playSound('shapeReveal'); }} style={{ marginTop: '10px', padding: '8px 16px', fontSize: '13px', alignSelf: 'center' }}>
                👀 Reveal All Values
              </button>
            </div>

            <Mascot mood="happy" bubble="Once you know the scale, you can answer ANY question about the data!" />
          </div>
        )}

      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button className="btn-nav-outline" onClick={() => { if (station > 0) setStation(prev => prev - 1); }} disabled={station === 0}>
          🠔 Previous Station
        </button>

        {station < 3 ? (
          <button className="btn-nav-outline" onClick={() => setStation(prev => prev + 1)}>
            Next Station ➔
          </button>
        ) : (
          <button
            className="btn-gold"
            onClick={onNext}
            style={{ padding: '14px 32px', fontSize: '17px' }}
          >
            Begin Practice Game! ➔
          </button>
        )}
      </div>
    </div>
  );
}
