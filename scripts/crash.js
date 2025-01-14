function play(){
    const home = getElementId('home')
    const play_ground = getElementId('play-ground');
   
    home.classList.add('hidden');
    play_ground.classList.remove('hidden');
}