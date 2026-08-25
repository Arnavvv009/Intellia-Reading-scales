export const questionBank = [
  // ================= WORLD 0: BAR GRAPH BASICS (Easy) — dataset: fruits, scale 2 =================
  {
    id: "RW0Q1", type: "scale_id", world: 0, difficulty: 1,
    questionText: "Look at this bar graph. What is its scale?",
    visual: "bar_view", datasetId: "fruits",
    options: [1, 2, 5, 10], correctAnswer: 2,
    hint1: "Look at the scale key written on the graph.", hint2: "It says '1 square = 2 children'.",
    explanation: "The scale of this graph is 2 — each square stands for 2 children."
  },
  {
    id: "RW0Q2", type: "read_value", world: 0, difficulty: 1,
    questionText: "How many children chose Apple?",
    visual: "bar_view", datasetId: "fruits", highlightLabel: "Apple",
    options: [6, 8, 10, 4], correctAnswer: 8,
    hint1: "Count the squares for Apple, then multiply by the scale.", hint2: "4 squares × 2 = 8.",
    explanation: "Apple's bar is 4 squares tall. 4 × 2 = 8 children chose Apple."
  },
  {
    id: "RW0Q3", type: "read_value", world: 0, difficulty: 1,
    questionText: "How many children chose Orange?",
    visual: "bar_view", datasetId: "fruits", highlightLabel: "Orange",
    options: [6, 8, 3, 10], correctAnswer: 6,
    hint1: "Count the squares for Orange.", hint2: "3 squares × 2 = 6.",
    explanation: "Orange's bar is 3 squares tall. 3 × 2 = 6 children chose Orange."
  },
  {
    id: "RW0Q4", type: "read_value", world: 0, difficulty: 1,
    questionText: "How many children chose Banana?",
    visual: "bar_view", datasetId: "fruits", highlightLabel: "Banana",
    options: [8, 10, 5, 12], correctAnswer: 10,
    hint1: "Count the squares for Banana.", hint2: "5 squares × 2 = 10.",
    explanation: "Banana's bar is 5 squares tall. 5 × 2 = 10 children chose Banana."
  },
  {
    id: "RW0Q5", type: "read_value", world: 0, difficulty: 1,
    questionText: "How many children chose Mango?",
    visual: "bar_view", datasetId: "fruits", highlightLabel: "Mango",
    options: [2, 4, 6, 8], correctAnswer: 4,
    hint1: "Count the squares for Mango.", hint2: "2 squares × 2 = 4.",
    explanation: "Mango's bar is 2 squares tall. 2 × 2 = 4 children chose Mango."
  },
  {
    id: "RW0Q6", type: "true_false", world: 0, difficulty: 1,
    questionText: "True or False: Each square on this graph stands for exactly 1 child.",
    visual: "bar_view", datasetId: "fruits",
    options: ["False", "True", "Sometimes", "Cannot tell"], correctAnswer: "False",
    hint1: "Check the scale key at the top of the graph.", hint2: "The key says 1 square = 2 children, not 1.",
    explanation: "FALSE. Each square actually stands for 2 children, according to the scale key."
  },
  {
    id: "RW0Q7", type: "concept", world: 0, difficulty: 1,
    questionText: "If a bar has 3 squares, and the scale is 2, what is the real value?",
    visual: "bar_view", datasetId: "fruits",
    options: [3, 5, 6, 9], correctAnswer: 6,
    hint1: "Multiply the number of squares by the scale.", hint2: "3 × 2 = 6.",
    explanation: "3 squares × 2 (the scale) = 6. That's the real value."
  },
  {
    id: "RW0Q8", type: "most_least", world: 0, difficulty: 1,
    questionText: "Which fruit has the tallest bar?",
    visual: "bar_view", datasetId: "fruits",
    options: ["Banana", "Apple", "Orange", "Mango"], correctAnswer: "Banana",
    hint1: "Look for the bar that reaches highest on the graph.", hint2: "Banana's bar has 5 squares — the most of any fruit.",
    explanation: "Banana has the tallest bar, with 5 squares (10 children)."
  },
  {
    id: "RW0Q9", type: "most_least", world: 0, difficulty: 1,
    questionText: "Which fruit has the shortest bar?",
    visual: "bar_view", datasetId: "fruits",
    options: ["Mango", "Apple", "Orange", "Banana"], correctAnswer: "Mango",
    hint1: "Look for the bar that is lowest on the graph.", hint2: "Mango's bar has only 2 squares — the fewest.",
    explanation: "Mango has the shortest bar, with only 2 squares (4 children)."
  },
  {
    id: "RW0Q10", type: "concept", world: 0, difficulty: 1,
    questionText: "Why can't we just count the squares as the final answer?",
    visual: "bar_view", datasetId: "fruits",
    options: [
      "Because each square can stand for more than 1 real item",
      "Because squares are just decorations",
      "Because bars are always wrong",
      "Because graphs never have real numbers"
    ],
    correctAnswer: "Because each square can stand for more than 1 real item",
    hint1: "Think about what the scale key tells you.", hint2: "Each square might represent 2, 5, 10, or more real items.",
    explanation: "We must multiply by the scale because each square can represent more than 1 real item."
  },

  // ================= WORLD 1: PICTOGRAPH BASICS (Easy) — dataset: pets, scale 5 =================
  {
    id: "RW1Q1", type: "scale_id", world: 1, difficulty: 1,
    questionText: "What does each 🐾 paw print stand for in this pictograph?",
    visual: "pictograph_view", datasetId: "pets",
    options: [1, 2, 5, 10], correctAnswer: 5,
    hint1: "Look at the key at the bottom of the pictograph.", hint2: "It says 🐾 = 5 pets.",
    explanation: "Each 🐾 paw print stands for 5 pets, according to the key."
  },
  {
    id: "RW1Q2", type: "read_value", world: 1, difficulty: 1,
    questionText: "How many pets does 'Dog' really represent?",
    visual: "pictograph_view", datasetId: "pets", highlightLabel: "Dog",
    options: [3, 15, 10, 20], correctAnswer: 15,
    hint1: "Count the paw prints for Dog, then multiply by 5.", hint2: "3 paw prints × 5 = 15.",
    explanation: "Dog has 3 paw prints. 3 × 5 = 15 pets."
  },
  {
    id: "RW1Q3", type: "read_value", world: 1, difficulty: 1,
    questionText: "How many pets does 'Cat' really represent?",
    visual: "pictograph_view", datasetId: "pets", highlightLabel: "Cat",
    options: [4, 20, 15, 25], correctAnswer: 20,
    hint1: "Count the paw prints for Cat, then multiply by 5.", hint2: "4 paw prints × 5 = 20.",
    explanation: "Cat has 4 paw prints. 4 × 5 = 20 pets."
  },
  {
    id: "RW1Q4", type: "read_value", world: 1, difficulty: 1,
    questionText: "How many pets does 'Fish' really represent?",
    visual: "pictograph_view", datasetId: "pets", highlightLabel: "Fish",
    options: [6, 30, 25, 35], correctAnswer: 30,
    hint1: "Count the paw prints for Fish, then multiply by 5.", hint2: "6 paw prints × 5 = 30.",
    explanation: "Fish has 6 paw prints. 6 × 5 = 30 pets."
  },
  {
    id: "RW1Q5", type: "read_value", world: 1, difficulty: 1,
    questionText: "How many pets does 'Hamster' really represent?",
    visual: "pictograph_view", datasetId: "pets", highlightLabel: "Hamster",
    options: [2, 10, 5, 15], correctAnswer: 10,
    hint1: "Count the paw prints for Hamster, then multiply by 5.", hint2: "2 paw prints × 5 = 10.",
    explanation: "Hamster has 2 paw prints. 2 × 5 = 10 pets."
  },
  {
    id: "RW1Q6", type: "true_false", world: 1, difficulty: 1,
    questionText: "True or False: In a pictograph, you count the pictures then multiply by the key.",
    visual: "pictograph_view", datasetId: "pets",
    options: ["True", "False", "Only sometimes", "Never"], correctAnswer: "True",
    hint1: "Think about how you found the value for Dog, Cat, Fish, and Hamster.", hint2: "Count × Key = real value, every time.",
    explanation: "TRUE. Count the pictures in a row, then multiply by the key to find the real value."
  },
  {
    id: "RW1Q7", type: "concept", world: 1, difficulty: 1,
    questionText: "If a row has 4 paw prints and the key is 5, what is the real value?",
    visual: "pictograph_view", datasetId: "pets",
    options: [9, 20, 45, 4], correctAnswer: 20,
    hint1: "Multiply the number of pictures by the key.", hint2: "4 × 5 = 20.",
    explanation: "4 paw prints × 5 (the key) = 20."
  },
  {
    id: "RW1Q8", type: "most_least", world: 1, difficulty: 1,
    questionText: "Which pet is the most popular in this class?",
    visual: "pictograph_view", datasetId: "pets",
    options: ["Fish", "Dog", "Cat", "Hamster"], correctAnswer: "Fish",
    hint1: "Look for the row with the most paw prints.", hint2: "Fish has 6 paw prints — the most of any pet.",
    explanation: "Fish is the most popular pet, with 30 pets (6 paw prints)."
  },
  {
    id: "RW1Q9", type: "most_least", world: 1, difficulty: 1,
    questionText: "Which pet is the least popular in this class?",
    visual: "pictograph_view", datasetId: "pets",
    options: ["Hamster", "Dog", "Cat", "Fish"], correctAnswer: "Hamster",
    hint1: "Look for the row with the fewest paw prints.", hint2: "Hamster has only 2 paw prints — the fewest.",
    explanation: "Hamster is the least popular pet, with only 10 pets (2 paw prints)."
  },
  {
    id: "RW1Q10", type: "concept", world: 1, difficulty: 1,
    questionText: "What tool helps you understand what each picture in a pictograph is worth?",
    visual: "pictograph_view", datasetId: "pets",
    options: ["The key / legend", "The title", "The mascot", "The color"], correctAnswer: "The key / legend",
    hint1: "It's usually written at the bottom of the pictograph.", hint2: "It tells you '🐾 = 5 pets', for example.",
    explanation: "The KEY (or legend) tells you exactly what each picture is worth."
  },

  // ================= WORLD 2: FINDING THE SCALE (Easy-Med) — dataset: books, scale 5 + mixed =================
  {
    id: "RW2Q1", type: "scale_id", world: 2, difficulty: 2,
    questionText: "What is the scale of this bar graph about books read?",
    visual: "bar_view", datasetId: "books",
    options: [1, 5, 10, 2], correctAnswer: 5,
    hint1: "Check the scale key printed on the graph.", hint2: "It says '1 square = 5 books'.",
    explanation: "The scale of this graph is 5 — each square stands for 5 books."
  },
  {
    id: "RW2Q2", type: "read_value", world: 2, difficulty: 2,
    questionText: "How many books did Ben read?",
    visual: "bar_view", datasetId: "books", highlightLabel: "Ben",
    options: [3, 15, 10, 20], correctAnswer: 15,
    hint1: "Count Ben's squares, then multiply by 5.", hint2: "3 × 5 = 15.",
    explanation: "Ben's bar is 3 squares tall. 3 × 5 = 15 books."
  },
  {
    id: "RW2Q3", type: "read_value", world: 2, difficulty: 2,
    questionText: "How many books did Priya read?",
    visual: "bar_view", datasetId: "books", highlightLabel: "Priya",
    options: [5, 25, 20, 30], correctAnswer: 25,
    hint1: "Count Priya's squares, then multiply by 5.", hint2: "5 × 5 = 25.",
    explanation: "Priya's bar is 5 squares tall. 5 × 5 = 25 books."
  },
  {
    id: "RW2Q4", type: "read_value", world: 2, difficulty: 2,
    questionText: "How many books did Ahmad read?",
    visual: "bar_view", datasetId: "books", highlightLabel: "Ahmad",
    options: [2, 10, 15, 5], correctAnswer: 10,
    hint1: "Count Ahmad's squares, then multiply by 5.", hint2: "2 × 5 = 10.",
    explanation: "Ahmad's bar is 2 squares tall. 2 × 5 = 10 books."
  },
  {
    id: "RW2Q5", type: "read_value", world: 2, difficulty: 2,
    questionText: "How many books did Siti read?",
    visual: "bar_view", datasetId: "books", highlightLabel: "Siti",
    options: [4, 20, 15, 25], correctAnswer: 20,
    hint1: "Count Siti's squares, then multiply by 5.", hint2: "4 × 5 = 20.",
    explanation: "Siti's bar is 4 squares tall. 4 × 5 = 20 books."
  },
  {
    id: "RW2Q6", type: "true_false", world: 2, difficulty: 2,
    questionText: "True or False: A bigger scale number means each square or picture is worth more.",
    visual: "bar_view", datasetId: "books",
    options: ["True", "False", "Only for pictographs", "Only for bar graphs"], correctAnswer: "True",
    hint1: "Compare a scale of 2 with a scale of 10.", hint2: "A scale of 10 means each square is worth much more than a scale of 2.",
    explanation: "TRUE. The bigger the scale number, the more each square or picture represents."
  },
  {
    id: "RW2Q7", type: "concept", world: 2, difficulty: 2,
    questionText: "A graph's scale key says '1 unit = 10'. If a bar has 3 units, what is its real value?",
    visual: "bar_view", datasetId: "vehicles",
    options: [13, 30, 3, 10], correctAnswer: 30,
    hint1: "Multiply the units by the scale.", hint2: "3 × 10 = 30.",
    explanation: "3 units × 10 (the scale) = 30."
  },
  {
    id: "RW2Q8", type: "concept", world: 2, difficulty: 2,
    questionText: "What should you always check FIRST before reading values off any graph?",
    visual: "bar_view", datasetId: "books",
    options: ["The scale key", "The color of the bars", "The size of the picture", "The font style"], correctAnswer: "The scale key",
    hint1: "Without this, you cannot know the real value of any bar or picture.", hint2: "It's usually written near the title or the axis.",
    explanation: "Always check the SCALE KEY first — it tells you how to convert squares or pictures into real values."
  },
  {
    id: "RW2Q9", type: "scale_id", world: 2, difficulty: 2,
    questionText: "What is the scale of this weather pictograph?",
    visual: "pictograph_view", datasetId: "weather",
    options: [1, 2, 5, 10], correctAnswer: 2,
    hint1: "Check the key at the bottom of the pictograph.", hint2: "It says '☀️ = 2 days'.",
    explanation: "The scale of this pictograph is 2 — each sun icon stands for 2 days."
  },
  {
    id: "RW2Q10", type: "scale_id", world: 2, difficulty: 2,
    questionText: "What is the scale of this National Day Parade ticket graph?",
    visual: "bar_view", datasetId: "parade",
    options: [10, 50, 100, 1000], correctAnswer: 100,
    hint1: "Check the scale key printed on the graph.", hint2: "It says '1 square = 100 tickets' — a very large scale for a large survey!",
    explanation: "The scale of this graph is 100 — useful for showing very large real-world numbers."
  },

  // ================= WORLD 3: MOST AND LEAST (Medium) — datasets: icecream (scale10), vehicles (scale10) =================
  {
    id: "RW3Q1", type: "most_least", world: 3, difficulty: 2,
    questionText: "Which ice cream flavour was sold the MOST?",
    visual: "pictograph_view", datasetId: "icecream",
    options: ["Chocolate", "Vanilla", "Strawberry", "Mango"], correctAnswer: "Chocolate",
    hint1: "Look for the row with the most 🍦 icons.", hint2: "Chocolate has 5 icons — the most.",
    explanation: "Chocolate was the most popular, with 50 cups sold (5 icons × 10)."
  },
  {
    id: "RW3Q2", type: "most_least", world: 3, difficulty: 2,
    questionText: "Which ice cream flavour was sold the LEAST?",
    visual: "pictograph_view", datasetId: "icecream",
    options: ["Mango", "Chocolate", "Vanilla", "Strawberry"], correctAnswer: "Mango",
    hint1: "Look for the row with the fewest 🍦 icons.", hint2: "Mango has only 2 icons — the fewest.",
    explanation: "Mango was the least popular, with only 20 cups sold (2 icons × 10)."
  },
  {
    id: "RW3Q3", type: "read_value", world: 3, difficulty: 2,
    questionText: "How many cups of Chocolate ice cream were sold?",
    visual: "pictograph_view", datasetId: "icecream", highlightLabel: "Chocolate",
    options: [5, 50, 40, 60], correctAnswer: 50,
    hint1: "Count the icons for Chocolate, then multiply by 10.", hint2: "5 × 10 = 50.",
    explanation: "Chocolate has 5 icons. 5 × 10 = 50 cups sold."
  },
  {
    id: "RW3Q4", type: "read_value", world: 3, difficulty: 2,
    questionText: "How many cups of Vanilla ice cream were sold?",
    visual: "pictograph_view", datasetId: "icecream", highlightLabel: "Vanilla",
    options: [3, 30, 40, 20], correctAnswer: 30,
    hint1: "Count the icons for Vanilla, then multiply by 10.", hint2: "3 × 10 = 30.",
    explanation: "Vanilla has 3 icons. 3 × 10 = 30 cups sold."
  },
  {
    id: "RW3Q5", type: "most_least", world: 3, difficulty: 2,
    questionText: "Which vehicle passed the school gate the MOST?",
    visual: "bar_view", datasetId: "vehicles",
    options: ["Car", "Bus", "Bicycle", "Motorcycle"], correctAnswer: "Car",
    hint1: "Look for the tallest bar.", hint2: "Car has 6 squares — the tallest bar.",
    explanation: "Car passed the most, with 60 vehicles (6 squares × 10)."
  },
  {
    id: "RW3Q6", type: "most_least", world: 3, difficulty: 2,
    questionText: "Which vehicle passed the school gate the LEAST?",
    visual: "bar_view", datasetId: "vehicles",
    options: ["Bus", "Car", "Bicycle", "Motorcycle"], correctAnswer: "Bus",
    hint1: "Look for the shortest bar.", hint2: "Bus has only 3 squares — the shortest bar.",
    explanation: "Bus passed the least, with only 30 vehicles (3 squares × 10)."
  },
  {
    id: "RW3Q7", type: "read_value", world: 3, difficulty: 2,
    questionText: "How many bicycles passed the school gate?",
    visual: "bar_view", datasetId: "vehicles", highlightLabel: "Bicycle",
    options: [4, 40, 30, 50], correctAnswer: 40,
    hint1: "Count Bicycle's squares, then multiply by 10.", hint2: "4 × 10 = 40.",
    explanation: "Bicycle's bar is 4 squares tall. 4 × 10 = 40 bicycles."
  },
  {
    id: "RW3Q8", type: "read_value", world: 3, difficulty: 2,
    questionText: "How many motorcycles passed the school gate?",
    visual: "bar_view", datasetId: "vehicles", highlightLabel: "Motorcycle",
    options: [5, 50, 40, 60], correctAnswer: 50,
    hint1: "Count Motorcycle's squares, then multiply by 10.", hint2: "5 × 10 = 50.",
    explanation: "Motorcycle's bar is 5 squares tall. 5 × 10 = 50 motorcycles."
  },
  {
    id: "RW3Q9", type: "true_false", world: 3, difficulty: 2,
    questionText: "True or False: The category with the tallest bar or most pictures always has the highest real value.",
    visual: "bar_view", datasetId: "vehicles",
    options: ["True", "False", "Only if the scale is 1", "Cannot tell"], correctAnswer: "True",
    hint1: "As long as the scale is the same across the whole graph, this always works.", hint2: "Taller/more always means bigger, within the same graph.",
    explanation: "TRUE. Within the same graph (same scale), the tallest bar or most pictures always means the highest real value."
  },
  {
    id: "RW3Q10", type: "compare", world: 3, difficulty: 2,
    questionText: "Comparing Chocolate (50) and Strawberry (40) ice creams, which is more popular?",
    visual: "pictograph_view", datasetId: "icecream",
    options: ["Chocolate", "Strawberry", "They are equal", "Cannot tell"], correctAnswer: "Chocolate",
    hint1: "Compare the two real values directly.", hint2: "50 is greater than 40.",
    explanation: "Chocolate (50) is more popular than Strawberry (40)."
  },

  // ================= WORLD 4: TOTALS & SUMS (Medium) — datasets: weather (scale2), recycling (scale5) =================
  {
    id: "RW4Q1", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many Sunny days were there?",
    visual: "pictograph_view", datasetId: "weather", highlightLabel: "Sunny",
    options: [8, 16, 10, 18], correctAnswer: 16,
    hint1: "Count Sunny's icons, then multiply by 2.", hint2: "8 × 2 = 16.",
    explanation: "Sunny has 8 icons. 8 × 2 = 16 days."
  },
  {
    id: "RW4Q2", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many Rainy days were there?",
    visual: "pictograph_view", datasetId: "weather", highlightLabel: "Rainy",
    options: [5, 10, 15, 20], correctAnswer: 10,
    hint1: "Count Rainy's icons, then multiply by 2.", hint2: "5 × 2 = 10.",
    explanation: "Rainy has 5 icons. 5 × 2 = 10 days."
  },
  {
    id: "RW4Q3", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many Cloudy days were there?",
    visual: "pictograph_view", datasetId: "weather", highlightLabel: "Cloudy",
    options: [2, 4, 6, 8], correctAnswer: 4,
    hint1: "Count Cloudy's icons, then multiply by 2.", hint2: "2 × 2 = 4.",
    explanation: "Cloudy has 2 icons. 2 × 2 = 4 days."
  },
  {
    id: "RW4Q4", type: "total", world: 4, difficulty: 3,
    questionText: "What is the TOTAL number of days recorded in this weather pictograph?",
    visual: "pictograph_view", datasetId: "weather",
    options: [28, 30, 32, 26], correctAnswer: 30,
    hint1: "Add up the real values: Sunny + Rainy + Cloudy.", hint2: "16 + 10 + 4 = 30.",
    explanation: "16 + 10 + 4 = 30 days in total — about a month!"
  },
  {
    id: "RW4Q5", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many kg of Paper were collected?",
    visual: "bar_view", datasetId: "recycling", highlightLabel: "Paper",
    options: [6, 30, 25, 35], correctAnswer: 30,
    hint1: "Count Paper's squares, then multiply by 5.", hint2: "6 × 5 = 30.",
    explanation: "Paper's bar is 6 squares tall. 6 × 5 = 30 kg."
  },
  {
    id: "RW4Q6", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many kg of Plastic were collected?",
    visual: "bar_view", datasetId: "recycling", highlightLabel: "Plastic",
    options: [4, 20, 15, 25], correctAnswer: 20,
    hint1: "Count Plastic's squares, then multiply by 5.", hint2: "4 × 5 = 20.",
    explanation: "Plastic's bar is 4 squares tall. 4 × 5 = 20 kg."
  },
  {
    id: "RW4Q7", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many kg of Glass were collected?",
    visual: "bar_view", datasetId: "recycling", highlightLabel: "Glass",
    options: [2, 10, 5, 15], correctAnswer: 10,
    hint1: "Count Glass's squares, then multiply by 5.", hint2: "2 × 5 = 10.",
    explanation: "Glass's bar is 2 squares tall. 2 × 5 = 10 kg."
  },
  {
    id: "RW4Q8", type: "read_value", world: 4, difficulty: 2,
    questionText: "How many kg of Metal were collected?",
    visual: "bar_view", datasetId: "recycling", highlightLabel: "Metal",
    options: [3, 15, 10, 20], correctAnswer: 15,
    hint1: "Count Metal's squares, then multiply by 5.", hint2: "3 × 5 = 15.",
    explanation: "Metal's bar is 3 squares tall. 3 × 5 = 15 kg."
  },
  {
    id: "RW4Q9", type: "total", world: 4, difficulty: 3,
    questionText: "What is the TOTAL weight of all recycling collected?",
    visual: "bar_view", datasetId: "recycling",
    options: [70, 75, 80, 65], correctAnswer: 75,
    hint1: "Add up every category's real value.", hint2: "30 + 20 + 10 + 15 = 75.",
    explanation: "30 + 20 + 10 + 15 = 75 kg in total."
  },
  {
    id: "RW4Q10", type: "true_false", world: 4, difficulty: 2,
    questionText: "True or False: To find the total, you must add up the real values, not just the number of squares.",
    visual: "bar_view", datasetId: "recycling",
    options: ["True", "False", "Only for pictographs", "Only for bar graphs"], correctAnswer: "True",
    hint1: "Adding raw squares would give the wrong total.", hint2: "Always convert to real values first, THEN add.",
    explanation: "TRUE. You must convert every bar to its real value first, then add them together for the total."
  },

  // ================= WORLD 5: DIFFERENCE & COMPARISON (Med-Hard) — dataset: canteen, scale 2 =================
  {
    id: "RW5Q1", type: "read_value", world: 5, difficulty: 3,
    questionText: "How many votes did Chicken Rice get?",
    visual: "bar_view", datasetId: "canteen", highlightLabel: "Chicken Rice",
    options: [6, 12, 10, 14], correctAnswer: 12,
    hint1: "Count Chicken Rice's squares, then multiply by 2.", hint2: "6 × 2 = 12.",
    explanation: "Chicken Rice's bar is 6 squares tall. 6 × 2 = 12 votes."
  },
  {
    id: "RW5Q2", type: "read_value", world: 5, difficulty: 3,
    questionText: "How many votes did Laksa get?",
    visual: "bar_view", datasetId: "canteen", highlightLabel: "Laksa",
    options: [4, 8, 6, 10], correctAnswer: 8,
    hint1: "Count Laksa's squares, then multiply by 2.", hint2: "4 × 2 = 8.",
    explanation: "Laksa's bar is 4 squares tall. 4 × 2 = 8 votes."
  },
  {
    id: "RW5Q3", type: "read_value", world: 5, difficulty: 3,
    questionText: "How many votes did Mee Goreng get?",
    visual: "bar_view", datasetId: "canteen", highlightLabel: "Mee Goreng",
    options: [3, 6, 9, 12], correctAnswer: 6,
    hint1: "Count Mee Goreng's squares, then multiply by 2.", hint2: "3 × 2 = 6.",
    explanation: "Mee Goreng's bar is 3 squares tall. 3 × 2 = 6 votes."
  },
  {
    id: "RW5Q4", type: "read_value", world: 5, difficulty: 3,
    questionText: "How many votes did Roti Prata get?",
    visual: "bar_view", datasetId: "canteen", highlightLabel: "Roti Prata",
    options: [5, 10, 8, 12], correctAnswer: 10,
    hint1: "Count Roti Prata's squares, then multiply by 2.", hint2: "5 × 2 = 10.",
    explanation: "Roti Prata's bar is 5 squares tall. 5 × 2 = 10 votes."
  },
  {
    id: "RW5Q5", type: "difference", world: 5, difficulty: 3,
    questionText: "How many MORE votes did Chicken Rice get than Laksa?",
    visual: "bar_view", datasetId: "canteen",
    options: [2, 4, 6, 8], correctAnswer: 4,
    hint1: "Find each real value, then subtract.", hint2: "12 - 8 = 4.",
    explanation: "12 (Chicken Rice) − 8 (Laksa) = 4 more votes."
  },
  {
    id: "RW5Q6", type: "difference", world: 5, difficulty: 3,
    questionText: "How many MORE votes did Roti Prata get than Mee Goreng?",
    visual: "bar_view", datasetId: "canteen",
    options: [2, 4, 6, 8], correctAnswer: 4,
    hint1: "Find each real value, then subtract.", hint2: "10 - 6 = 4.",
    explanation: "10 (Roti Prata) − 6 (Mee Goreng) = 4 more votes."
  },
  {
    id: "RW5Q7", type: "difference", world: 5, difficulty: 3,
    questionText: "How many FEWER votes did Mee Goreng get than Chicken Rice?",
    visual: "bar_view", datasetId: "canteen",
    options: [4, 6, 8, 10], correctAnswer: 6,
    hint1: "Find each real value, then subtract the smaller from the bigger.", hint2: "12 - 6 = 6.",
    explanation: "12 (Chicken Rice) − 6 (Mee Goreng) = 6 fewer votes for Mee Goreng."
  },
  {
    id: "RW5Q8", type: "difference", world: 5, difficulty: 3,
    questionText: "What is the difference between the most popular and least popular stall?",
    visual: "bar_view", datasetId: "canteen",
    options: [4, 6, 8, 10], correctAnswer: 6,
    hint1: "Most popular is Chicken Rice (12); least popular is Mee Goreng (6).", hint2: "12 - 6 = 6.",
    explanation: "The most popular (Chicken Rice, 12) minus the least popular (Mee Goreng, 6) equals 6."
  },
  {
    id: "RW5Q9", type: "true_false", world: 5, difficulty: 3,
    questionText: "True or False: To find 'how many more', you subtract the smaller real value from the bigger real value.",
    visual: "bar_view", datasetId: "canteen",
    options: ["True", "False", "You add them instead", "Cannot tell"], correctAnswer: "True",
    hint1: "This is the same subtraction rule you use for any comparison.", hint2: "Bigger value − smaller value = the difference.",
    explanation: "TRUE. Subtract the smaller real value from the bigger real value to find 'how many more'."
  },
  {
    id: "RW5Q10", type: "total", world: 5, difficulty: 3,
    questionText: "If Chicken Rice got 12 votes and Laksa got 8, what is their combined total?",
    visual: "bar_view", datasetId: "canteen",
    options: [16, 20, 24, 18], correctAnswer: 20,
    hint1: "Add the two real values together.", hint2: "12 + 8 = 20.",
    explanation: "12 + 8 = 20 votes combined."
  },

  // ================= WORLD 6: HALF SYMBOLS & TRICKY KEYS (Hard) — datasets: stationery (scale4), parade (scale100) =================
  {
    id: "RW6Q1", type: "scale_id", world: 6, difficulty: 3,
    questionText: "What is the scale of this stationery pictograph?",
    visual: "pictograph_view", datasetId: "stationery",
    options: [1, 2, 4, 8], correctAnswer: 4,
    hint1: "Check the key at the bottom.", hint2: "It says '✏️ = 4 items'.",
    explanation: "The scale of this pictograph is 4."
  },
  {
    id: "RW6Q2", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many pencils were sold?",
    visual: "pictograph_view", datasetId: "stationery", highlightLabel: "Pencils",
    options: [5, 20, 16, 24], correctAnswer: 20,
    hint1: "Count Pencils' icons, then multiply by 4.", hint2: "5 × 4 = 20.",
    explanation: "Pencils has 5 icons. 5 × 4 = 20 pencils sold."
  },
  {
    id: "RW6Q3", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many erasers were sold?",
    visual: "pictograph_view", datasetId: "stationery", highlightLabel: "Erasers",
    options: [3, 12, 8, 16], correctAnswer: 12,
    hint1: "Count Erasers' icons, then multiply by 4.", hint2: "3 × 4 = 12.",
    explanation: "Erasers has 3 icons. 3 × 4 = 12 erasers sold."
  },
  {
    id: "RW6Q4", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many rulers were sold?",
    visual: "pictograph_view", datasetId: "stationery", highlightLabel: "Rulers",
    options: [2, 8, 4, 12], correctAnswer: 8,
    hint1: "Count Rulers' icons, then multiply by 4.", hint2: "2 × 4 = 8.",
    explanation: "Rulers has 2 icons. 2 × 4 = 8 rulers sold."
  },
  {
    id: "RW6Q5", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many notebooks were sold?",
    visual: "pictograph_view", datasetId: "stationery", highlightLabel: "Notebooks",
    options: [4, 16, 12, 20], correctAnswer: 16,
    hint1: "Count Notebooks' icons, then multiply by 4.", hint2: "4 × 4 = 16.",
    explanation: "Notebooks has 4 icons. 4 × 4 = 16 notebooks sold."
  },
  {
    id: "RW6Q6", type: "half_symbol", world: 6, difficulty: 3,
    questionText: "If the key is '✏️ = 4 items' and you see HALF a pencil icon, how many items does that half represent?",
    visual: "pictograph_view", datasetId: "stationery",
    options: [1, 2, 3, 4], correctAnswer: 2,
    hint1: "A half-icon represents half of the scale value.", hint2: "Half of 4 is 2.",
    explanation: "A half-icon represents half the scale value: half of 4 is 2."
  },
  {
    id: "RW6Q7", type: "true_false", world: 6, difficulty: 3,
    questionText: "True or False: A half-picture in a pictograph always means half of the scale value.",
    visual: "pictograph_view", datasetId: "stationery",
    options: ["True", "False", "Only for bar graphs", "Cannot tell"], correctAnswer: "True",
    hint1: "Think about how the half-pencil question worked.", hint2: "Half a picture = half the key's value, always.",
    explanation: "TRUE. A half-picture always represents exactly half of the scale value."
  },
  {
    id: "RW6Q8", type: "scale_id", world: 6, difficulty: 3,
    questionText: "What is the scale of this National Day Parade ticket graph?",
    visual: "bar_view", datasetId: "parade",
    options: [10, 50, 100, 1000], correctAnswer: 100,
    hint1: "Check the scale key printed on the graph.", hint2: "It says '1 square = 100 tickets'.",
    explanation: "The scale of this graph is 100 — a large scale for large real-world numbers."
  },
  {
    id: "RW6Q9", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many tickets were issued to Tampines residents?",
    visual: "bar_view", datasetId: "parade", highlightLabel: "Tampines",
    options: [50, 500, 400, 600], correctAnswer: 500,
    hint1: "Count Tampines' squares, then multiply by 100.", hint2: "5 × 100 = 500.",
    explanation: "Tampines' bar is 5 squares tall. 5 × 100 = 500 tickets."
  },
  {
    id: "RW6Q10", type: "read_value", world: 6, difficulty: 3,
    questionText: "How many tickets were issued to Woodlands residents?",
    visual: "bar_view", datasetId: "parade", highlightLabel: "Woodlands",
    options: [60, 600, 500, 700], correctAnswer: 600,
    hint1: "Count Woodlands' squares, then multiply by 100.", hint2: "6 × 100 = 600.",
    explanation: "Woodlands' bar is 6 squares tall. 6 × 100 = 600 tickets."
  },

  // ================= WORLD 7: REAL WORLD DATA SAFARI (Hard, Singapore-flavoured) =================
  {
    id: "RW7Q1", type: "word_problem", world: 7, difficulty: 3,
    questionText: "At a hawker centre, a scale key says '1 🍜 = 2 orders'. If Laksa has 4 bowls drawn, how many orders were sold?",
    visual: "icon", iconEmoji: "🍜",
    options: [4, 8, 6, 10], correctAnswer: 8,
    hint1: "Multiply the number of bowls by the scale.", hint2: "4 × 2 = 8.",
    explanation: "4 bowls × 2 (the scale) = 8 orders sold."
  },
  {
    id: "RW7Q2", type: "word_problem", world: 7, difficulty: 3,
    questionText: "An MRT station sign shows a bar graph of passengers with scale '1 square = 100 people'. A bar with 5 squares represents how many people?",
    visual: "icon", iconEmoji: "🚇",
    options: [5, 50, 500, 5000], correctAnswer: 500,
    hint1: "Multiply the squares by the scale.", hint2: "5 × 100 = 500.",
    explanation: "5 squares × 100 (the scale) = 500 people."
  },
  {
    id: "RW7Q3", type: "word_problem", world: 7, difficulty: 3,
    questionText: "A hawker survey shows Roti Prata got 10 real votes, and the scale is '1 square = 2 votes'. How many squares tall is the Roti Prata bar?",
    visual: "icon", iconEmoji: "🫓",
    options: [2, 5, 10, 20], correctAnswer: 5,
    hint1: "This time, work backwards: divide the real value by the scale.", hint2: "10 ÷ 2 = 5.",
    explanation: "10 ÷ 2 (the scale) = 5 squares tall."
  },
  {
    id: "RW7Q4", type: "word_problem", world: 7, difficulty: 3,
    questionText: "A National Day Parade ticket graph has scale '1 square = 100 tickets'. Jurong has 4 squares. How many tickets is that?",
    visual: "icon", iconEmoji: "🎉",
    options: [4, 40, 400, 4000], correctAnswer: 400,
    hint1: "Multiply the squares by the scale.", hint2: "4 × 100 = 400.",
    explanation: "4 squares × 100 (the scale) = 400 tickets."
  },
  {
    id: "RW7Q5", type: "difference", world: 7, difficulty: 3,
    questionText: "If Bedok has 3 squares and Woodlands has 6 squares on the same graph (scale = 100), how many MORE tickets does Woodlands have?",
    visual: "icon", iconEmoji: "🏘️",
    options: [100, 200, 300, 400], correctAnswer: 300,
    hint1: "Find both real values first, then subtract.", hint2: "600 - 300 = 300.",
    explanation: "Woodlands (600) − Bedok (300) = 300 more tickets."
  },
  {
    id: "RW7Q6", type: "true_false", world: 7, difficulty: 3,
    questionText: "True or False: The same scale key applies to every single bar in one graph.",
    visual: "icon", iconEmoji: "📊",
    options: ["True", "False", "Only for pictographs", "Cannot tell"], correctAnswer: "True",
    hint1: "A graph only has ONE scale key shown, for the whole graph.", hint2: "Every bar in the same graph uses that same scale.",
    explanation: "TRUE. One scale key applies to the entire graph — every bar or row uses it."
  },
  {
    id: "RW7Q7", type: "word_problem", world: 7, difficulty: 3,
    questionText: "A canteen survey pictograph shows 🍜 = 2 orders. If Mee Goreng has 3 bowls drawn, how many real orders is that?",
    visual: "icon", iconEmoji: "🍝",
    options: [3, 6, 9, 12], correctAnswer: 6,
    hint1: "Multiply the bowls by the scale.", hint2: "3 × 2 = 6.",
    explanation: "3 bowls × 2 (the scale) = 6 orders."
  },
  {
    id: "RW7Q8", type: "concept", world: 7, difficulty: 3,
    questionText: "Which is easier for showing a very large number like 1800 parade tickets: 1800 individual pictures, or a graph with a large scale key?",
    visual: "icon", iconEmoji: "🎫",
    options: [
      "A graph with a large scale key",
      "1800 individual pictures",
      "Neither works",
      "Both are equally easy"
    ],
    correctAnswer: "A graph with a large scale key",
    hint1: "Imagine drawing 1800 tiny pictures one by one!", hint2: "A large scale (like 100) lets you show big numbers with just a few squares or pictures.",
    explanation: "A graph with a LARGE SCALE KEY is far easier — it lets you represent huge numbers with just a few symbols."
  },
  {
    id: "RW7Q9", type: "concept", world: 7, difficulty: 3,
    questionText: "A canteen survey's total across 4 stalls is 36 votes, with 18 total squares and a scale of 2. Does this match?",
    visual: "icon", iconEmoji: "🍜",
    options: ["Yes, they match", "No, they don't match", "Cannot tell", "Only sometimes"], correctAnswer: "Yes, they match",
    hint1: "Multiply the total squares by the scale.", hint2: "18 × 2 = 36 — exactly matching!",
    explanation: "18 squares × 2 (the scale) = 36, which matches the total votes given."
  },
  {
    id: "RW7Q10", type: "concept", world: 7, difficulty: 3,
    questionText: "Why do real-world graphs (like MRT ridership) often use large scales such as 100 or 1000?",
    visual: "icon", iconEmoji: "🚇",
    options: [
      "Because the real numbers being shown are very large",
      "Because small numbers look nicer",
      "Because scale doesn't actually matter",
      "Because graphs must always use a scale of 1"
    ],
    correctAnswer: "Because the real numbers being shown are very large",
    hint1: "Think about how many people ride the MRT each day.", hint2: "A big scale lets a small graph represent huge real-world numbers.",
    explanation: "Large scales let graphs represent very large real-world numbers using just a few squares or pictures."
  },

  // ================= WORLD 8: GRAPH VOCABULARY LAB (Hard) =================
  {
    id: "RW8Q1", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call the number that tells you what each square or picture is worth?",
    visual: "icon", iconEmoji: "🔑",
    options: ["Scale (or Key)", "Title", "Axis", "Category"], correctAnswer: "Scale (or Key)",
    hint1: "It's often written near the top or bottom of the graph.", hint2: "It says things like '1 square = 5 items'.",
    explanation: "This is called the SCALE, or KEY (for pictographs)."
  },
  {
    id: "RW8Q2", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call the short sentence at the top telling you what the graph shows?",
    visual: "icon", iconEmoji: "📋",
    options: ["Title", "Scale", "Bar", "Legend position"], correctAnswer: "Title",
    hint1: "It's the very first thing you should read on any graph.", hint2: "For example: 'Favourite Fruits Survey'.",
    explanation: "This is called the TITLE of the graph."
  },
  {
    id: "RW8Q3", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call each tall column in a bar graph?",
    visual: "icon", iconEmoji: "📊",
    options: ["Bar", "Dot", "Line", "Wedge"], correctAnswer: "Bar",
    hint1: "It's right there in the name of the graph type!", hint2: "'Bar graph' — made of many...",
    explanation: "This is called a BAR."
  },
  {
    id: "RW8Q4", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call each group being counted, like 'Apple' or 'Banana'?",
    visual: "icon", iconEmoji: "🏷️",
    options: ["Category", "Scale", "Total", "Axis"], correctAnswer: "Category",
    hint1: "Each fruit type is its own group.", hint2: "This is what each bar or picture-row represents.",
    explanation: "This is called a CATEGORY."
  },
  {
    id: "RW8Q5", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call a graph that uses repeated pictures instead of bars?",
    visual: "icon", iconEmoji: "🖼️",
    options: ["Pictograph", "Bar Graph", "Line Graph", "Pie Chart"], correctAnswer: "Pictograph",
    hint1: "Think 'picture' + 'graph'.", hint2: "It uses icons like 🐾 or 🍦 instead of bars.",
    explanation: "This is called a PICTOGRAPH."
  },
  {
    id: "RW8Q6", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "What do we call the line along the bottom or side of a graph that shows categories or numbers?",
    visual: "icon", iconEmoji: "📏",
    options: ["Axis", "Bar", "Scale", "Key"], correctAnswer: "Axis",
    hint1: "There are usually two of these — one going across, one going up.", hint2: "This holds the labels for categories or numbers.",
    explanation: "This is called an AXIS."
  },
  {
    id: "RW8Q7", type: "true_false", world: 8, difficulty: 3,
    questionText: "True or False: The scale key must always be checked before reading any values from a graph.",
    visual: "icon", iconEmoji: "🔑",
    options: ["True", "False", "Only for pictographs", "Only for bar graphs"], correctAnswer: "True",
    hint1: "Without it, you can't know what the squares or pictures are really worth.", hint2: "The scale key is always essential.",
    explanation: "TRUE. The scale key is essential — without it, you cannot correctly read any graph."
  },
  {
    id: "RW8Q8", type: "vocabulary", world: 8, difficulty: 3,
    questionText: "In a pictograph, what do we call the small symbol that represents a fixed number of items?",
    visual: "icon", iconEmoji: "🐾",
    options: ["Icon / Picture symbol", "Bar", "Axis", "Category"], correctAnswer: "Icon / Picture symbol",
    hint1: "It's the little picture, like 🐾 or 🍦, repeated in each row.", hint2: "Each one stands for the scale's value.",
    explanation: "This is called an ICON or PICTURE SYMBOL."
  },
  {
    id: "RW8Q9", type: "concept", world: 8, difficulty: 3,
    questionText: "If a graph has NO scale key shown at all, what should you assume?",
    visual: "icon", iconEmoji: "❓",
    options: ["1 square = 1 item", "1 square = 10 items", "You cannot read the graph at all", "1 square = 100 items"], correctAnswer: "1 square = 1 item",
    hint1: "Without a different scale stated, always default to the simplest case.", hint2: "No scale shown usually means a scale of 1.",
    explanation: "Without a stated scale, you should assume 1 square = 1 item (a scale of 1)."
  },
  {
    id: "RW8Q10", type: "concept", world: 8, difficulty: 3,
    questionText: "Which part of a graph tells you WHICH category has the most or least?",
    visual: "icon", iconEmoji: "🔍",
    options: [
      "Comparing bar heights or picture counts",
      "The title alone",
      "The scale key alone",
      "The color alone"
    ],
    correctAnswer: "Comparing bar heights or picture counts",
    hint1: "You need to look at the actual data, not just labels.", hint2: "Comparing heights/counts (after applying the scale) reveals the most and least.",
    explanation: "Comparing bar heights or picture counts (after applying the scale) tells you which category has the most or least."
  },

  // ================= WORLD 9: MYSTERY DATA PALACE (Hardest, reverse reasoning) =================
  {
    id: "RW9Q1", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am the number that tells you how much each square or picture is worth. What am I?",
    visual: "icon", iconEmoji: "🔑",
    options: ["The Scale (Key)", "The Title", "The Bar", "The Axis"], correctAnswer: "The Scale (Key)",
    hint1: "Without me, you can't find any real value.", hint2: "I'm often written as '1 square = ___'.",
    explanation: "I am THE SCALE (KEY) — essential for finding any real value on a graph."
  },
  {
    id: "RW9Q2", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am found at the top of a graph, telling you what the data is about. What am I?",
    visual: "icon", iconEmoji: "📋",
    options: ["The Title", "The Scale", "A Bar", "A Category"], correctAnswer: "The Title",
    hint1: "I'm the first thing you should read.", hint2: "For example, I might say 'Favourite Fruits Survey'.",
    explanation: "I am THE TITLE — I tell you what the whole graph is about."
  },
  {
    id: "RW9Q3", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am a tall column showing a category's value in a graph made of columns. What am I?",
    visual: "icon", iconEmoji: "📊",
    options: ["A Bar", "A Title", "A Key", "An Axis"], correctAnswer: "A Bar",
    hint1: "I give my name to an entire type of graph.", hint2: "Bar graphs are made of many of me.",
    explanation: "I am A BAR."
  },
  {
    id: "RW9Q4", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am used instead of bars, and I am made of repeated pictures. What am I?",
    visual: "icon", iconEmoji: "🖼️",
    options: ["A Pictograph", "A Bar Graph", "A Line Graph", "An Axis"], correctAnswer: "A Pictograph",
    hint1: "My name combines 'picture' and 'graph'.", hint2: "I use icons like 🐾 or 🍦 in rows.",
    explanation: "I am A PICTOGRAPH."
  },
  {
    id: "RW9Q5", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "Multiply my squares by the scale, and you'll get my real value. What am I?",
    visual: "icon", iconEmoji: "📏",
    options: ["A bar's real value", "A title", "A key", "An axis"], correctAnswer: "A bar's real value",
    hint1: "This is what units × scale always gives you.", hint2: "It's the true, real-world number a bar represents.",
    explanation: "I am A BAR'S REAL VALUE — found by multiplying its squares by the scale."
  },
  {
    id: "RW9Q6", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am the biggest real value among all categories in a graph. What am I called?",
    visual: "icon", iconEmoji: "🏆",
    options: ["The Most (Maximum)", "The Least (Minimum)", "The Total", "The Scale"], correctAnswer: "The Most (Maximum)",
    hint1: "I belong to the tallest bar or the row with the most pictures.", hint2: "I am the opposite of 'the least'.",
    explanation: "I am THE MOST (MAXIMUM) — the highest real value in the data."
  },
  {
    id: "RW9Q7", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am what you get when you add up every category's real value. What am I?",
    visual: "icon", iconEmoji: "➕",
    options: ["The Total", "The Scale", "A Category", "A Title"], correctAnswer: "The Total",
    hint1: "I'm the grand sum of everything in the data.", hint2: "You find me by adding all real values together.",
    explanation: "I am THE TOTAL — the sum of every category's real value."
  },
  {
    id: "RW9Q8", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am the gap between the highest and lowest real values in a graph. What am I?",
    visual: "icon", iconEmoji: "↔️",
    options: ["The Difference", "The Total", "The Scale", "The Title"], correctAnswer: "The Difference",
    hint1: "You find me using subtraction.", hint2: "Biggest value − smallest value = me.",
    explanation: "I am THE DIFFERENCE — found by subtracting the smallest real value from the biggest."
  },
  {
    id: "RW9Q9", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "A bar has 4 squares. The scale is 5. I am the real value hidden inside this bar. What number am I?",
    visual: "icon", iconEmoji: "🔢",
    options: [9, 20, 45, 4], correctAnswer: 20,
    hint1: "Multiply the squares by the scale.", hint2: "4 × 5 = 20.",
    explanation: "I am 20 — found by multiplying 4 squares × 5 (the scale)."
  },
  {
    id: "RW9Q10", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I appear in a pictograph as 'half' a picture, worth exactly half the scale's value. What am I?",
    visual: "icon", iconEmoji: "🌗",
    options: ["A half-symbol", "A full symbol", "A blank space", "A double symbol"], correctAnswer: "A half-symbol",
    hint1: "I represent an amount smaller than one whole picture.", hint2: "I am worth exactly half of what a full picture is worth.",
    explanation: "I am A HALF-SYMBOL — worth exactly half of the scale's value."
  }
];
