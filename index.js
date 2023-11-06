
function redactText() {
  const originalText = document.getElementById('originalText').value;
  const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');

  const redactedText = originalText.split(' ').map(word => {
    if (wordsToRedact.includes(word.toLowerCase())) {
      return '*'.repeat(word.length);
    } else {
      return word;
    }
  }).join(' ');

  document.getElementById('redactedText').innerText = redactedText;
}
