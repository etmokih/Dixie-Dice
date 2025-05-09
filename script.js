
const tensImages = [...Array(10).keys()].map(i => `images/tens_${i * 10}.png`);
const onesImages = [...Array(10).keys()].map(i => `images/d10_${i}.png`);

const tensDie = document.getElementById("tens-die");
const onesDie = document.getElementById("ones-die");
const rollButton = document.getElementById("roll-button");

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}

function rollDice() {
  let rollCount = 10;
  const interval = setInterval(() => {
    const tensIndex = Math.floor(Math.random() * 10);
    const onesIndex = Math.floor(Math.random() * 10);
    tensDie.src = tensImages[tensIndex];
    onesDie.src = onesImages[onesIndex];
    rollCount--;
    if (rollCount === 0) {
      clearInterval(interval);
      const total = tensIndex * 10 + onesIndex;
      speak(total.toString());
    }
  }, 100);
}

rollButton.addEventListener("click", rollDice);
