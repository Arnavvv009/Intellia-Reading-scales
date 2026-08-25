// Canonical registry of every narrated string used across the Reading Scale module.
// Components call the shared `speak(text)` function directly with these exact
// strings (see App.jsx), so this file is the single source of truth that
// scripts/generate_audio.js reads from to pre-generate matching static MP3s.
// Content Policy: Paragraphs & Questions ONLY — no titles or labels included here.

export function introNarration() {
  return [];
}

export function wonderNarration() {
  return [
    "Look at this pictograph! Each paw print stands for 5 pets, not just 1. So how many pets does 'Fish' really have if there are 6 paw prints?",
    "6 paw prints times 5 pets each equals 30 fish! Reading the scale key is the secret to unlocking the real numbers. Let's learn more in the story!"
  ];
}

export function getStoryNarration() {
  return [
    "Vertex the Robot is collecting data about everyone's favourite fruit! Instead of writing every single name down, Vertex draws a graph — but every square and picture needs a secret key to unlock its real value.",
    "This bar graph's scale key says '1 square = 2 children'. The Banana bar is 4 squares tall. That means 4 squares × 2 children = 8 children chose banana — not just 4!",
    "In this pictograph, each 🐾 paw print stands for 5 pets. The Fish row has 6 paw prints, so 6 × 5 = 30 classmates have fish as pets! A half a picture would mean half of the scale value.",
    "Once every bar's real value is found, we can compare them! The tallest bar has the MOST, the shortest bar has the LEAST, and adding all the values together gives the TOTAL. Reading the scale correctly is the key to getting these right."
  ];
}

export function simulateStationNarration() {
  return [
    "Welcome to the Scale Reader! Drag the bar and pick a scale to see how the real value changes.",
    "In the Pictograph Counter, count the pictures in each row and multiply by the key to find the real value.",
    "Let's match! Match each graph term on the left with its correct meaning on the right.",
    "Welcome to the Real-Life Data Sandbox! Pick a dataset and answer questions about it."
  ];
}

export function praisePhrases() {
  return ["Excellent!", "Well done!", "Brilliant!", "You got it!", "Super smart!"];
}

export function playPhaseNarration() {
  return [
    "Oh no! You have run out of hearts. Let's retry this world."
  ];
}

export function reflectQuestionNarration() {
  return [
    "Tell me the first thing you should always check on a graph before reading its values!",
    "If a scale key says '1 square = 5', and a bar has 4 squares, what's the real value?",
    "Can you name a real-life graph you've seen with a big scale, like 100 or 1000?",
    "What does 'the most' and 'the least' mean on a bar graph?",
    "How would you find the difference between two bars on a scaled graph?"
  ];
}
