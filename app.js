async function fetchAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const advice = data.slip.advice;

    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.textContent = advice;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}

// Fetch advice immediately on page load
fetchAdvice();
