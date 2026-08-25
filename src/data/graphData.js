// Core reference data for the "Reading Scale" topic within Data Handling (Statistics).
// Grade 2/3 MOE syllabus scope: reading bar graphs and pictographs where the scale is
// NOT 1-to-1 (e.g. 1 unit = 2, 5, or 10), reading the scale key, and using it to find
// values, totals, differences, and comparisons between categories.

export const GRAPH_TYPES = {
  bar: { id: 'bar', name: 'Bar Graph', emoji: '📊' },
  pictograph: { id: 'pictograph', name: 'Pictograph', emoji: '🖼️' },
};

// Each dataset: categories with a raw "units" count (number of grid squares / icons),
// and a "scale" multiplier so that value = units * scale.
export const DATASETS = [
  {
    id: 'fruits',
    title: "Mei Ling's Fruit Survey",
    type: 'bar',
    scale: 2,
    unitLabel: 'children',
    axisLabel: 'Number of Children',
    icon: '🍎',
    color: '#FF8A50',
    categories: [
      { label: 'Apple', units: 4, emoji: '🍎' },
      { label: 'Orange', units: 3, emoji: '🍊' },
      { label: 'Banana', units: 5, emoji: '🍌' },
      { label: 'Mango', units: 2, emoji: '🥭' },
    ],
  },
  {
    id: 'pets',
    title: 'Pets Owned by Class 2A',
    type: 'pictograph',
    scale: 5,
    unitLabel: 'pets',
    axisLabel: 'Number of Pets',
    icon: '🐾',
    color: '#34D399',
    categories: [
      { label: 'Dog', units: 3, emoji: '🐶' },
      { label: 'Cat', units: 4, emoji: '🐱' },
      { label: 'Fish', units: 6, emoji: '🐠' },
      { label: 'Hamster', units: 2, emoji: '🐹' },
    ],
  },
  {
    id: 'books',
    title: 'Books Read This Month',
    type: 'bar',
    scale: 5,
    unitLabel: 'books',
    axisLabel: 'Number of Books',
    icon: '📚',
    color: '#A78BFA',
    categories: [
      { label: 'Ben', units: 3, emoji: '📘' },
      { label: 'Priya', units: 5, emoji: '📗' },
      { label: 'Ahmad', units: 2, emoji: '📙' },
      { label: 'Siti', units: 4, emoji: '📕' },
    ],
  },
  {
    id: 'icecream',
    title: 'Ice Cream Flavours Sold',
    type: 'pictograph',
    scale: 10,
    unitLabel: 'cups',
    axisLabel: 'Number of Cups Sold',
    icon: '🍦',
    color: '#FFBE1A',
    categories: [
      { label: 'Chocolate', units: 5, emoji: '🍫' },
      { label: 'Vanilla', units: 3, emoji: '🍦' },
      { label: 'Strawberry', units: 4, emoji: '🍓' },
      { label: 'Mango', units: 2, emoji: '🥭' },
    ],
  },
  {
    id: 'vehicles',
    title: 'Vehicles Passing the School Gate',
    type: 'bar',
    scale: 10,
    unitLabel: 'vehicles',
    axisLabel: 'Number of Vehicles',
    icon: '🚗',
    color: '#4A90D9',
    categories: [
      { label: 'Car', units: 6, emoji: '🚗' },
      { label: 'Bus', units: 3, emoji: '🚌' },
      { label: 'Bicycle', units: 4, emoji: '🚲' },
      { label: 'Motorcycle', units: 5, emoji: '🏍️' },
    ],
  },
  {
    id: 'weather',
    title: "Weather This Month",
    type: 'pictograph',
    scale: 2,
    unitLabel: 'days',
    axisLabel: 'Number of Days',
    icon: '☀️',
    color: '#06B6D4',
    categories: [
      { label: 'Sunny', units: 8, emoji: '☀️' },
      { label: 'Rainy', units: 5, emoji: '🌧️' },
      { label: 'Cloudy', units: 2, emoji: '⛅' },
    ],
  },
  {
    id: 'recycling',
    title: 'Recycling Collected (kg)',
    type: 'bar',
    scale: 5,
    unitLabel: 'kg',
    axisLabel: 'Weight (kg)',
    icon: '♻️',
    color: '#22C55E',
    categories: [
      { label: 'Paper', units: 6, emoji: '📄' },
      { label: 'Plastic', units: 4, emoji: '🧴' },
      { label: 'Glass', units: 2, emoji: '🍾' },
      { label: 'Metal', units: 3, emoji: '🥫' },
    ],
  },
  {
    id: 'canteen',
    title: 'Hawker Stall Popularity Survey',
    type: 'bar',
    scale: 2,
    unitLabel: 'votes',
    axisLabel: 'Number of Votes',
    icon: '🍜',
    color: '#EF4444',
    categories: [
      { label: 'Chicken Rice', units: 6, emoji: '🍗' },
      { label: 'Laksa', units: 4, emoji: '🍜' },
      { label: 'Mee Goreng', units: 3, emoji: '🍝' },
      { label: 'Roti Prata', units: 5, emoji: '🫓' },
    ],
  },
  {
    id: 'parade',
    title: 'National Day Parade Tickets by Estate',
    type: 'bar',
    scale: 100,
    unitLabel: 'tickets',
    axisLabel: 'Number of Tickets',
    icon: '🎉',
    color: '#EC4899',
    categories: [
      { label: 'Tampines', units: 5, emoji: '🏘️' },
      { label: 'Bedok', units: 3, emoji: '🏘️' },
      { label: 'Jurong', units: 4, emoji: '🏘️' },
      { label: 'Woodlands', units: 6, emoji: '🏘️' },
    ],
  },
  {
    id: 'stationery',
    title: 'Stationery Sold at the Bookshop',
    type: 'pictograph',
    scale: 4,
    unitLabel: 'items',
    axisLabel: 'Number of Items',
    icon: '✏️',
    color: '#8B5CF6',
    categories: [
      { label: 'Pencils', units: 5, emoji: '✏️' },
      { label: 'Erasers', units: 3, emoji: '🧽' },
      { label: 'Rulers', units: 2, emoji: '📏' },
      { label: 'Notebooks', units: 4, emoji: '📓' },
    ],
  },
];

export function getDataset(id) {
  return DATASETS.find(d => d.id === id);
}

// Helper: compute a category's real value from its grid units and the dataset's scale
export function categoryValue(category, scale) {
  return category.units * scale;
}

// Helper: total across all categories in a dataset
export function datasetTotal(dataset) {
  return dataset.categories.reduce((sum, c) => sum + categoryValue(c, dataset.scale), 0);
}

// Helper: find category with max / min value
export function maxCategory(dataset) {
  return dataset.categories.reduce((best, c) =>
    categoryValue(c, dataset.scale) > categoryValue(best, dataset.scale) ? c : best
  );
}
export function minCategory(dataset) {
  return dataset.categories.reduce((worst, c) =>
    categoryValue(c, dataset.scale) < categoryValue(worst, dataset.scale) ? c : worst
  );
}
