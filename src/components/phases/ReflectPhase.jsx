import React from 'react';
import Mascot from '../shared/Mascot';

const getBadgeIcon = (id) => {
  switch (id) {
    case 'shape_spotter': return '🔍';
    case 'property_pro': return '✏️';
    case 'geometry_master': return '👑';
    case 'perfect_world': return '🎯';
    case 'streak_legend': return '🔥';
    case 'real_world_champion': return '🌍';
    case 'shape_explorer': return '📊';
    case 'clock_champion': return '📏';
    case 'full_journey': return '🎓';
    default: return '⭐';
  }
};

const getBadgeLabel = (id) => {
  switch (id) {
    case 'shape_spotter': return 'Data Spotter';
    case 'property_pro': return 'Scale Pro';
    case 'geometry_master': return 'Data Master';
    case 'perfect_world': return 'Perfect World';
    case 'streak_legend': return 'Streak Legend';
    case 'real_world_champion': return 'Real World Champion';
    case 'shape_explorer': return 'Data Explorer';
    case 'clock_champion': return 'Difference Champion';
    case 'full_journey': return 'Full Journey';
    default: return 'Badge Unlocked';
  }
};

const WORLD_DATA = [
  { name: "Bar Graph Basics", emoji: "📊" },
  { name: "Pictograph Basics", emoji: "🖼️" },
  { name: "Finding the Scale", emoji: "🔑" },
  { name: "Most and Least", emoji: "⚖️" },
  { name: "Totals & Sums", emoji: "➕" },
  { name: "Difference & Comparison", emoji: "↔️" },
  { name: "Half Symbols & Tricky Keys", emoji: "🌗" },
  { name: "Real World Data Safari", emoji: "🌍" },
  { name: "Graph Vocabulary Lab", emoji: "📋" },
  { name: "Mystery Data Palace", emoji: "🎪" },
];

const REFLECTION_PROMPTS = [
  "Tell me the first thing you should always check on a graph before reading its values!",
  "If a scale key says '1 square = 5', and a bar has 4 squares, what's the real value?",
  "Can you name a real-life graph you've seen with a big scale, like 100 or 1000?",
  "What does 'the most' and 'the least' mean on a bar graph?",
  "How would you find the difference between two bars on a scaled graph?"
];

export default function ReflectPhase({
  xp,
  totalStars,
  unlockedBadges,
  worldScores,
  correctAnswers,
  onReset,
  playSound,
  speak,
  unlockBadge
}) {
  const getStarRating = (score) => {
    if (score === null) return 0;
    if (score >= 9) return 3;
    if (score >= 7) return 2;
    if (score >= 5) return 1;
    return 0;
  };

  const totalStarsEarned = worldScores.reduce((acc, score) => acc + getStarRating(score), 0);
  const worldsCompleted = worldScores.filter(score => score !== null).length;

  return (
    <div className="main-card" style={{ minHeight: '280px' }}>
      <Mascot mood="excited" bubble="Amazing work! Let's reflect a little! 📋" />

      <h2 style={{ color: 'var(--accent-gold)', fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>
        Your Performance!
      </h2>

      <div className="results-stats-row" style={{ marginBottom: '32px' }}>
        <div className="results-stat-card">
          <div style={{ fontSize: '32px', marginBottom: '4px' }}>⭐</div>
          <div className="results-stat-val">{totalStarsEarned}</div>
          <div className="results-stat-label">Total Stars</div>
        </div>
        <div className="results-stat-card">
          <div style={{ fontSize: '32px', marginBottom: '4px' }}>✅</div>
          <div className="results-stat-val">{correctAnswers}</div>
          <div className="results-stat-label">Correct Answers</div>
        </div>
        <div className="results-stat-card">
          <div style={{ fontSize: '32px', marginBottom: '4px' }}>🌍</div>
          <div className="results-stat-val">{worldsCompleted}/10</div>
          <div className="results-stat-label">Worlds Completed</div>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '18px', textAlign: 'center' }}>
          World Progress
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', justifyContent: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          {WORLD_DATA.map((world, idx) => {
            const stars = getStarRating(worldScores[idx]);
            const completed = worldScores[idx] !== null;
            return (
              <div key={idx} style={{
                background: completed ? 'rgba(255, 190, 26, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
              }}>
                <span style={{ fontSize: '20px' }}>{world.emoji}</span>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{ fontSize: '10px', opacity: i < stars ? 1 : 0.2 }}>☆</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {unlockedBadges.length > 0 && (
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '18px' }}>Badges Earned</h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {unlockedBadges.map((badgeId) => (
              <div key={badgeId} style={{
                background: 'var(--surface-card-nested)', borderRadius: '12px', padding: '10px 14px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '90px'
              }}>
                <span style={{ fontSize: '24px' }}>{getBadgeIcon(badgeId)}</span>
                <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-muted-lavender)', textAlign: 'center' }}>
                  {getBadgeLabel(badgeId)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--accent-gold)', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
          Time to Reflect!
        </h3>
        <p style={{ color: 'var(--text-muted-lavender)', fontSize: '14px', marginBottom: '16px' }}>
          {REFLECTION_PROMPTS[0]}
        </p>
        <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '16px', color: 'var(--text-muted-lavender)', fontSize: '13px' }}>
          I always check the scale key first, because it tells me what each square or picture is really worth before I read any values...
        </div>
      </div>

      <button className="btn-gold" onClick={onReset} style={{ marginTop: '28px', alignSelf: 'center' }}>
        🔄 Start a New Journey
      </button>
    </div>
  );
}
