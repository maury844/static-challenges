const canvas = document.querySelector('#confetti');
var jsConfetti;

function moveButtonRandom() {
  const moveButton = document.getElementById('moveButton');
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

  // Check for overlapping with the "Add Task" button
  const addTaskButton = document.getElementById('addTaskButton');

  let overlap = false;
  do {
    overlap = false;
    const randomX = Math.floor(Math.random() * maxX) + initialX + margin;
    const randomY = Math.floor(Math.random() * maxY) + initialY + margin;

    moveButton.style.position = 'absolute';
    moveButton.style.left = `${randomX}px`;
    moveButton.style.top = `${randomY}px`;

    // Check for overlapping with the "Add Task" button
    const addTaskButtonRect = addTaskButton.getBoundingClientRect();
    const moveButtonRect = moveButton.getBoundingClientRect();

    if (
      moveButtonRect.left < addTaskButtonRect.right &&
      moveButtonRect.right > addTaskButtonRect.left &&
      moveButtonRect.top < addTaskButtonRect.bottom &&
      moveButtonRect.bottom > addTaskButtonRect.top
    ) {
      overlap = true;
    }
  } while (overlap);
}

function triggerConfetti() {
  if (!jsConfetti) {
    jsConfetti = new JSConfetti();
  }

  jsConfetti.addConfetti();
}
function navigateTo(page) {
  window.location.href = page;
}
