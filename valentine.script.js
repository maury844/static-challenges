const canvas = document.querySelector('#confetti');
var jsConfetti;
const alternativeLabels = [
  'No',
  'Not today',
  'Sorry, no',
  'I wish I could say yes, but no',
  'I wish I could say yes, but no',
  'Unfortunately, no',
  "I'm afraid it's a no",
  "No, and I'm sorry",
  "No, and I'm sorry",
  "No, and I'm sorry",
  'No, and it hurts to say',
  'No, and it hurts to say',
  'No, and it hurts to say',
  'No, and it pains me to say so',
  'No, and it pains me to say so',
  'No, and it pains me to say so',
  'No, and it pains me to say so',
  'No, and it pains me to say so',
  'No, and it breaks my heart',
  'No, and it breaks my heart',
  'No, and it breaks my heart',
  'No, and it breaks my heart',
  'No, and it breaks my heart',
];
const GROW_RATIO = 0.1;
const gifListSrc = [
  'assets/blow-kiss.gif',
  'assets/pretty-please.gif',
  'assets/wink.gif',
  'assets/crying.gif',
  'assets/laying-sad.gif',
  'assets/laying-crying.gif',
  'assets/gonna-jump.gif',
];
let sadIdx = 0;

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

async function getHappy() {
  if (!jsConfetti) {
    jsConfetti = new JSConfetti();
  }

  const params = {
    emojis: ['🦄', '🌈', '🤍', '✨', '💫', '🌸', '🖤'],
    emojiSize: 30,
    confettiNumber: 150,
  };

  const gif = document.getElementById('gif-img');
  gif.src = 'assets/many-hearts.gif';
  gif.style.width = `400px`;
  gif.style.height = `330px`;

  await jsConfetti.addConfetti(choose([params, {}]));
}

function getSadder() {
  sadIdx++;
  const gif = document.getElementById('gif-img');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');

  yesButton.style.height = `${yesButton.offsetHeight * (1 + GROW_RATIO)}px`;
  yesButton.style.width = `${yesButton.offsetWidth * (1 + GROW_RATIO)}px`;
  //   noButton.style.height = `${noButton.offsetHeight * (1 - GROW_RATIO)}px`;
  //   noButton.style.width = `${noButton.offsetWidth * (1 - GROW_RATIO)}px`;

  const label = choose(alternativeLabels);
  noButton.innerHTML = label;

  const idx = Math.min(sadIdx, gifListSrc.length - 1);
  gif.src = gifListSrc[idx];

  if (sadIdx > gifListSrc.length) {
    gif.style.height = `${gif.offsetHeight * (1 + 2 * GROW_RATIO)}px`;
    gif.style.width = `${gif.offsetWidth * (1 + 2 * GROW_RATIO)}px`;
  }
}

function navigateTo(page) {
  window.location.href = page;
}
