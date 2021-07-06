const loader=document.getElementById('loader');

function loaded() {
    setTimeout(function () { 
        loader.style.display='none';
        
     }, 3000);   //change the time to 3000ms after test
}