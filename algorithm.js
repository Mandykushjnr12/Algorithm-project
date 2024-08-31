// script.js
function analyzeSentence() {
  const sentence = document.getElementById('sentence').value.trim();

  // Check if the sentence ends with a period
  if (!sentence.endsWith('.')) {
      alert('The sentence must end with a period.');
      return;
  }

  // Remove the period for further processing
  const trimmedSentence = sentence.slice(0, -1);
  const length = trimmedSentence.length;
  const words = trimmedSentence.split(/\s+/).length;
  const vowelCount = (trimmedSentence.match(/[aeiouAEIOU]/g) || []).length;

  // Generate character-by-character details
  let characterDetails = '';
  for (let i = 0; i < trimmedSentence.length; i++) {
      characterDetails += `Character ${i + 1}: '${trimmedSentence[i]}'\n`;
  }

  // Display results
  document.getElementById('length-result').textContent = `Length of the sentence: ${length} characters`;
  document.getElementById('word-count-result').textContent = `Number of words: ${words}`;
  document.getElementById('vowel-count-result').textContent = `Number of vowels: ${vowelCount}`;
  document.getElementById('character-details').textContent = `Character-by-character details:\n${characterDetails}`;
}
