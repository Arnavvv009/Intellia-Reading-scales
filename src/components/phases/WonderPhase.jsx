import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';
import PictographViewer from '../shared/PictographViewer';
import { getDataset } from '../../data/graphData';

const wonderDataset = getDataset('pets');

export default function WonderPhase({ onNext, playSound, speak }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    speak("Look at this pictograph! Each paw print stands for 5 pets, not just 1. So how many pets does 'Fish' really have if there are 6 paw prints?");
  }, [speak]);

  const handleReveal = () => {
    if (revealed) {
      onNext();
      return;
    }
    setRevealed(true);
    playSound('shapeReveal');
    speak("6 paw prints times 5 pets each equals 30 fish! Reading the scale key is the secret to unlocking the real numbers. Let's learn more in the story!");
  };

  return (
    <div className="main-card">
      <Mascot
        mood={revealed ? "happy" : "thinking"}
        bubble={revealed ? "6 × 5 = 30 — the scale key unlocks the real number! 🔑" : "Hmm... I wonder..."}
      />

      <div className="wonder-badge-circle" style={{ height: 'auto', padding: '14px' }}>
        <div className={`wonder-silhouette ${revealed ? 'wonder-revealed' : ''}`} style={{ width: '100%' }}>
          <PictographViewer dataset={wonderDataset} width={360} height={180} showValues={revealed} highlightIndex={revealed ? 2 : null} />
        </div>
      </div>

      <h2 className="wonder-heading">
        Each paw print stands for 5 pets, not just 1. How many pets does "Fish" really have if there are 6 paw prints?
      </h2>

      <p className="wonder-subtitle">
        What if we multiplied the number of paw prints by the scale?
      </p>

      <div className="hint-fact-pill">
        ✨ Always check the scale key before counting a graph! ✨
      </div>

      {revealed && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 0.5;
            const size = Math.random() * 6 + 6;
            const color = ['#ffbe1a', '#22c55e', '#a78bfa', '#ff8a50'][i % 4];
            return (
              <div key={i} style={{
                position: 'absolute', left: `${left}%`, top: '60%',
                width: `${size}px`, height: `${size}px`, backgroundColor: color,
                borderRadius: i % 2 === 0 ? '50%' : '0', opacity: 0.8,
                animation: `floatUp 1.2s ease-out forwards`, animationDelay: `${delay}s`
              }} />
            );
          })}
        </div>
      )}

      <button className="btn-gold" onClick={handleReveal} style={{ marginTop: 'auto', alignSelf: 'center' }}>
        {revealed ? "Let's Read the Story! ➔" : "I have a guess! 🔍 Let's Find Out!"}
      </button>
    </div>
  );
}
