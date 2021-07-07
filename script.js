const loader=document.getElementById('loader');

function loaded() {
    setTimeout(function () { 
        loader.style.display='none';
        
     }, 3000);   //change the time to 3000ms after test
}

const btnplay = document.getElementById('btnplay');
const mysong1 = document.getElementById('song1');
function songplay() {
    
    if(mysong1.paused)
    {
        mysong1.play();
        btnplay.innerHTML='Pause';
    }
    else{
        mysong1.pause();
        btnplay.innerHTML = 'Play';
    }
};