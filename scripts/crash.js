
function keyboardPressByPlayer(event){
  console.log(event.key);

  const screenKey = getElementId("random-alphabet");
  const screenKeyAlphabet = screenKey.innerText;
  const screenKeyAlphabetLowerCase = screenKeyAlphabet.toLowerCase();

  if ( screenKeyAlphabetLowerCase === event.key){
     console.log('you win')
     
  }
  else{
    console.log('you lost')
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