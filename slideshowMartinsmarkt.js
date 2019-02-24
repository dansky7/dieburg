var slideIndexMartinsmarkt=0;
carouselMartinsmarkt();

function carouselMartinsmarkt(){
    var i;
    var x = document.getElementsByClassName("slideshowMartinsmarkt");
    for(i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideIndexMartinsmarkt++;
    if(slideIndexMartinsmarkt > x.length) {slideIndexMartinsmarkt=1}
    x[slideIndexMartinsmarkt-1].style.display="block";
    setTimeout(carouselMartinsmarkt, 2000);
}