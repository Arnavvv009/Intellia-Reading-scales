import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';

const slidesData = [
  {
    title: "Vertex the Data Detective",
    body: "Vertex the Robot is collecting data about everyone's favourite fruit! Instead of writing every single name down, Vertex draws a graph — but every square and picture needs a secret key to unlock its real value.",
    fact: "Data can be shown as a Bar Graph or a Pictograph!",
    nudge: "Let's learn to read the scale key together!",
    image: "/assets/story_slide1.png"
  },
  {
    title: "Reading a Bar Graph's Scale",
    body: "This bar graph's scale key says '1 square = 2 children'. The Banana bar is 4 squares tall. That means 4 squares × 2 children = 8 children chose banana — not just 4!",
    fact: "Always multiply: units × scale = real value",
    nudge: "Never forget to check the scale key first!",
    image: "/assets/story_slide2.png"
  },
  {
    title: "Reading a Pictograph's Key",
    body: "In this pictograph, each 🐾 paw print stands for 5 pets. The Fish row has 6 paw prints, so 6 × 5 = 30 classmates have fish as pets! A half a picture would mean half of the scale value.",
    fact: "Each picture can represent many real items",
    nudge: "Count the pictures, then multiply by the key!",
    image: "/assets/story_slide3.png"
  },
  {
    title: "Comparing and Totalling",
    body: "Once every bar's real value is found, we can compare them! The tallest bar has the MOST, the shortest bar has the LEAST, and adding all the values together gives the TOTAL. Reading the scale correctly is the key to getting these right.",
    fact: "Most, Least, Total, and Difference all depend on reading the scale correctly!",
    nudge: "Now let's go practice reading real graphs!",
    image: "/assets/story_slide4.png"
  }
];

export default function StoryPhase({ onNext, speak }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const currentSlide = slidesData[slideIdx];

  useEffect(() => {
    speak(currentSlide.body);
  }, [slideIdx, speak]);

  const handleNext = () => {
    if (slideIdx < slidesData.length - 1) {
      setSlideIdx(prev => prev + 1);
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    if (slideIdx > 0) setSlideIdx(prev => prev - 1);
  };

  const pct = Math.round(((slideIdx + 1) / slidesData.length) * 100);

  return (
    <div style={{ width: '100%' }}>
      <div className="story-header">
        <span>Slide {slideIdx + 1} of 4</span>
        <div className="story-dots">
          {slidesData.map((_, idx) => (
            <div key={idx} className={`story-dot ${idx === slideIdx ? 'story-dot--active' : ''}`} />
          ))}
        </div>
        <span>{pct}%</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="main-card" style={{ paddingBottom: '32px' }}>
        <div className="story-img-bleed">
          <img 
            src={currentSlide.image} 
            alt={currentSlide.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        <div className="story-content-section">
          <h2 className="story-title">{currentSlide.title}</h2>
          <p className="story-body">{currentSlide.body}</p>
          <div className="hint-fact-pill" style={{ alignSelf: 'flex-start' }}>
            ✨ {currentSlide.fact} ✨
          </div>
          <Mascot mood="idle" bubble={currentSlide.nudge} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button className="btn-nav-outline" onClick={handlePrev} disabled={slideIdx === 0} style={{ opacity: slideIdx === 0 ? 0.5 : 1 }}>
          ← Previous
        </button>
        <button className="btn-nav-outline" onClick={handleNext}>
          {slideIdx < slidesData.length - 1 ? "Next ➔" : "Go to Practice ➔"}
        </button>
      </div>
    </div>
  );
}
