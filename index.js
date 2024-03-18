// meta-magics.js

const math = require('mathjs');
const stringSimilarity = require('string-similarity');

// Function to calculate the nth Fibonacci number
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    const temp = a;
    a = b;
    b = temp + b;
  }
  return a;
}

// Function to calculate the sum of squares of numbers up to n
function sumOfSquares(n) {
  return math.sum(math.range(1, n + 1).map(x => math.pow(x, 2)));
}

// Function to calculate the Jaccard similarity coefficient between two arrays
function jaccardSimilarity(arr1, arr2) {
  const intersection = arr1.filter(value => arr2.includes(value));
  const union = [...new Set([...arr1, ...arr2])];
  return intersection.length / union.length;
}

// Function to calculate the similarity score between two strings
function stringSimilarityScore(str1, str2) {
  return stringSimilarity.compareTwoStrings(str1, str2);
}

module.exports = {
  fibonacci,
  sumOfSquares,
  jaccardSimilarity,
  stringSimilarityScore
};
