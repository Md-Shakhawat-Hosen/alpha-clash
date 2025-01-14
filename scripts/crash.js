
function keyboardPressByPlayer(event){
  console.log(event.key);

  const screenKey = getElementId("random-alphabet");
  const screenKeyAlphabet = screenKey.innerText;
  const screenKeyAlphabetLowerCase = screenKeyAlphabet.toLowerCase();

    const score_id = getElementId("score-id");
    const life_id = getElementId('life');

    let life_value = parseInt(life_id.innerText);

    let score_value = parseInt(score_id.innerText);
  if ( screenKeyAlphabetLowerCase === event.key){
     console.log('you win')
     score_value = score_value + 1;

   
     score_id.innerText = score_value;

     generateRandomAlphabets()
  }
  else{
    console.log('you lost')

    life_value = life_value - 1;

    life_id.innerText = life_value;

    if (life_value < 1){
        hideElementById('play-ground');
        showElementById('final-score');
    }

    
  }
}


document.addEventListener("keyup", keyboardPressByPlayer);






function generateRandomAlphabets(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');

    const randomNumber = Math.random()*25;
    const roundNumber = Math.round(randomNumber);
    
   

    const random_alphabet_id = getElementId("random-alphabet");
    random_alphabet_id.innerText = alphabetsArray[roundNumber];

  setKeyboardColor(alphabetsArray[roundNumber]);
    
}





function play(){
    
    hideElementById("home");
    showElementById('play-ground');
    

    generateRandomAlphabets();
    
}