const tensImages = [...Array(10).keys()].map(i => `images/tens_${i * 10}.png`);
const onesImages = [...Array(10).keys()].map(i => `images/d10_${i}.png`);

const tensDie = document.getElementById("tens-die");
const onesDie = document.getElementById("ones-die");
const rollButton = document.getElementById("roll-button");

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel(); // Clear any queued speech
  window.speechSynthesis.speak(msg);
}

function rollDice() {
  // Immediately decide the result
  const tensIndex = Math.floor(Math.random() * 10);
  const onesIndex = Math.floor(Math.random() * 10);
  const finalValue = tensIndex * 10 + onesIndex;

  // Animate the dice roll
  let rollCount = 10;
  const interval = setInterval(() => {
    const randomTens = Math.floor(Math.random() * 10);
    const randomOnes = Math.floor(Math.random() * 10);
    tensDie.src = tensImages[randomTens];
    onesDie.src = onesImages[randomOnes];
    rollCount--;
    if (rollCount === 0) {
      clearInterval(interval);
      tensDie.src = tensImages[tensIndex];
      onesDie.src = onesImages[onesIndex];
    }
  }, 100);

  // Speak result immediately — required for iOS
  speak(finalValue.toString());
}

rollButton.addEventListener("click", rollDice);
