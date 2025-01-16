let currentAudio = null;
let soundInterval = null;

function playSound(letter) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset playback position
  }

  if (soundInterval) {
    clearInterval(soundInterval);
    soundInterval = null; // Reset the interval
  }
  // Create a new audio object for the corresponding letter
  currentAudio = new Audio(`sounds/${letter}.mp3`);
  currentAudio.play();

  soundInterval = setInterval(() => {
    // currentAudio.currentTime = 0; // Reset playback position
    currentAudio.play(); // Play the sound again
  }, 1000); // Play sound every 1000ms (1 second)
}

function keyboardPressByPlayer(event) {
  // console.log(event);

  const screenKey = getElementId("random-alphabet");
  const screenKeyAlphabet = screenKey.innerText;
  const screenKeyAlphabetLowerCase = screenKeyAlphabet.toLowerCase();
  const pressedKey = event.key
    ? event.key.toLowerCase()
    : event.target.innerText.toLowerCase();
  const score_id = getElementId("score-id");
  const life_id = getElementId("life");

  let life_value = parseInt(life_id.innerText);

  let score_value = parseInt(score_id.innerText);

  // console.log(pressedKey);

  if (pressedKey === "Enter" || pressedKey === 'enter') {
    play();
  }
  if (pressedKey === "Escape" || pressedKey === "escape") {
    setScoreValue(score_value);
    currentAudio.pause();
    if (soundInterval) {
      clearInterval(soundInterval);
      soundInterval = null;
    }
  }

  // if (soundInterval) {
  //   clearInterval(soundInterval);
  //   soundInterval = null;
  // }

  if (screenKeyAlphabetLowerCase === pressedKey) {
    //  console.log('you win')
    score_value = score_value + 1;

    score_id.innerText = score_value;

    removeKeyboardColor(screenKeyAlphabetLowerCase);

    generateRandomAlphabets();
  } else {
    // console.log('you lost')

    life_value = life_value - 1;

    life_id.innerText = life_value;

    if (life_value < 1) {
      currentAudio.pause();
      if (soundInterval) {
        clearInterval(soundInterval);
        soundInterval = null;
      }
      hideElementById("play-ground");
      showElementById("final-score");
      const final_value = getElementId("final-value");
      final_value.innerText = score_value;
    }
  }
}

document.addEventListener("keyup", keyboardPressByPlayer);

const virtualKeys = document.querySelectorAll(".kbd.key"); // Select all `kbd` keys
virtualKeys.forEach((key) => {
  // console.log(key)
  key.addEventListener("click", keyboardPressByPlayer); // For desktop
  // key.addEventListener("touchstart", keyboardPressByPlayer); // For mobile
});

function playAgain() {
  hideElementById("final-score");
  const score_id = getElementId("score-id");
  const life = getElementId("life");
  const alphabet_id = getElementId("random-alphabet");

  const alphabet = alphabet_id.innerText;
  life.innerText = 5;
  score_id.innerText = 0;
  removeKeyboardColor(alphabet.toLowerCase());

  play();
}

function generateRandomAlphabets() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabets.split("");

  const randomNumber = Math.random() * 25;
  const roundNumber = Math.round(randomNumber);

  const random_alphabet_id = getElementId("random-alphabet");
  random_alphabet_id.innerText = alphabetsArray[roundNumber];

  setKeyboardColor(alphabetsArray[roundNumber]);
  playSound(alphabetsArray[roundNumber]);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");

  generateRandomAlphabets();
}
