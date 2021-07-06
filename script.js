const loader=document.getElementById('loader');

function loaded() {
    setTimeout(function () { 
        loader.style.display='none';
     }, 3000);
}