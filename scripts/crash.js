
function keyboardPressByPlayer(event){
//   console.log(event.key);

  const screenKey = getElementId("random-alphabet");
  const screenKeyAlphabet = screenKey.innerText;
  const screenKeyAlphabetLowerCase = screenKeyAlphabet.toLowerCase();

    const score_id = getElementId("score-id");
    const life_id = getElementId('life');

    let life_value = parseInt(life_id.innerText);

    let score_value = parseInt(score_id.innerText);
  if ( screenKeyAlphabetLowerCase === event.key){
    //  console.log('you win')
     score_value = score_value + 1;

   
     score_id.innerText = score_value;

     removeKeyboardColor(screenKeyAlphabetLowerCase)

     generateRandomAlphabets()
  }
  else{
    // console.log('you lost')

    life_value = life_value - 1;

    life_id.innerText = life_value;

    if (life_value < 1){
        hideElementById('play-ground');
        showElementById('final-score');
        const final_value = getElementId('final-value');
        final_value.innerText = score_value;
    }

    
  }
}


document.addEventListener("keyup", keyboardPressByPlayer);


function playAgain(){
  const score_id = getElementId("score-id");
  const life = getElementId('life')
  const alphabet_id = getElementId("random-alphabet");
  const alphabet = alphabet_id.innerText
  life.innerText = 5;
   score_id.innerText = 0;
   removeKeyboardColor(alphabet.toLowerCase());

   play();

}



function generateRandomAlphabets(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');

    const randomNumber = Math.random()*25;
    const roundNumber = Math.round(randomNumber);
    
   

    const random_alphabet_id = getElementId("random-alphabet");
    random_alphabet_id.innerText = alphabetsArray[roundNumber];

    // playSound(alphabetsArray[roundNumber]);

  setKeyboardColor(alphabetsArray[roundNumber]);
    
}





function play(){
    
    hideElementById("home");
    showElementById('play-ground');
    

    generateRandomAlphabets();
    
}