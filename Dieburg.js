var index = 0;
var x = document.getElementsByClassName("slideshow"); // alle Bilder in Array

for(let i=0; i<x.length; i++){  // alle Bilder ausblenden
    x[i].style.display = "none";
}
x[0].style.display="block"; // erstes Bild einblenden
carousel();

function carousel(){
    x[index].style.display="none";
    index++;
    if(index<x.length){
        x[index].style.display = "block";
    }else{
        index=0;
        x[index].style.display = "block"
    }
    setTimeout(carousel, 2000);
}