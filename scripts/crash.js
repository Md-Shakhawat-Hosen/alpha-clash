
function setKeyboardColor(idField){
       
    const keyid = getElementId(idField);
    keyid.classList.add('bg-sky-500')
        
}






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