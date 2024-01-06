const canvas = document.querySelector('#confetti');
var jsConfetti;

function moveButtonRandom() {
  const moveButton = document.getElementById('move-button');
  const mainContent = document.querySelector('.main-content');

  const margin = 60; // Set your desired safe margin

  const maxX = mainContent.clientWidth - moveButton.clientWidth - margin;
  const maxY = mainContent.clientHeight - moveButton.clientHeight - margin;

  const initialX = mainContent.getBoundingClientRect().left;

  const randomX = Math.floor(Math.random() * maxX) + initialX + margin;
  const randomY = Math.floor(Math.random() * maxY) + margin;

  moveButton.style.position = 'absolute';
  moveButton.style.left = `${randomX}px`;
  moveButton.style.top = `${randomY}px`;
}

function moveButtonRandomOverlap() {
  const moveButton = document.getElementById('move-button');
  const mainContent = document.querySelector('.main-content');
  const margin = 10; // Set your desired safe margin

  const maxX = mainContent.clientWidth - moveButton.clientWidth - margin;
  const maxY = mainContent.clientHeight - moveButton.clientHeight - margin;

  let initialX = mainContent.getBoundingClientRect().left;
  const initialY = mainContent.getBoundingClientRect().top;

  // Check for overlapping with the "Yes" button
  const yesButton = document.getElementById('yes-button');

  let overlap = false;
  do {
    overlap = false;
    const randomX = Math.floor(Math.random() * maxX) + initialX + margin;
    const randomY = Math.floor(Math.random() * maxY) + initialY + margin;

    moveButton.style.position = 'absolute';
    moveButton.style.left = `${randomX}px`;
    moveButton.style.top = `${randomY}px`;

    // Check for overlapping with the "Add Task" button
    const yesButtonRect = yesButton.getBoundingClientRect();
    const moveButtonRect = moveButton.getBoundingClientRect();

    if (
      moveButtonRect.left < yesButtonRect.right &&
      moveButtonRect.right > yesButtonRect.left &&
      moveButtonRect.top < yesButtonRect.bottom &&
      moveButtonRect.bottom > yesButtonRect.top
    ) {
      overlap = true;
    }
  } while (overlap);
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

async function triggerConfetti() {
  if (!jsConfetti) {
    jsConfetti = new JSConfetti();
  }

  const params = {
    emojis: ['🦄', '🌈', '⚡️', '✨', '💫', '🌸', '🖤'],
    emojiSize: 30,
    confettiNumber: 150,
  };

  await jsConfetti.addConfetti(choose([params, {}]));
}
function navigateTo(page) {
  window.location.href = page;
}
