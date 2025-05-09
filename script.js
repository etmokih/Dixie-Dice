
const tensImages = [...Array(10).keys()].map(i => `images/tens_${i * 10}.png`);
const onesImages = [...Array(10).keys()].map(i => `images/d10_${i}.png`);

const tensDie = document.getElementById("tens-die");
const onesDie = document.getElementById("ones-die");
const rollButton = document.getElementById("roll-button");
const resultDisplay = document.getElementById("result");

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.cancel(); // Cancel any pending speech
  window.speechSynthesis.speak(msg);
}

function rollDice() {
  let rollCount = 10;

  const tensIndex = Math.floor(Math.random() * 10);
  const onesIndex = Math.floor(Math.random() * 10);
  const finalValue = tensIndex * 10 + onesIndex;

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
      resultDisplay.textContent = `Result: ${finalValue}`;
      speak(finalValue.toString());
    }
  }, 100);
}

rollButton.addEventListener("click", rollDice);
