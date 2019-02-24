var slideIndex=0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("slideshowMartinsmarkt");
    var y = document.getElementsByClassName("slideshowSchloga");
    for(i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    for(i=0; i<y.length; y++){
        y[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > x.length) {slideIndex=1}
    if(slideIndex > y.length) {slideIndex=1}
    x[slideIndex-1].style.display="block";
    y[slideIndex-1].style.display="block";
    setTimeout(carousel, 2000);
}