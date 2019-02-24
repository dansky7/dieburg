var slideIndexFastnacht=0;
carouselFastnacht();

function carouselFastnacht(){
    var i;
    var x = document.getElementsByClassName("slideshowFastnacht");
    for(i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideIndexFastnacht++;
    if(slideIndexFastnacht > x.length) {slideIndexFastnacht=1}
    x[slideIndexFastnacht-1].style.display="block";
    setTimeout(carouselFastnacht, 2000);
}