function play(){
    const home = document.getElementById('home');
    const play_ground = document.getElementById("play-ground");
    console.log(play_ground);
    console.log(home);

    home.classList.add('hidden');
    play_ground.classList.remove('hidden');
}