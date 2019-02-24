var slideIndexSchloga=0;
carouselSchloga();

function carouselSchloga(){
    var i;
    var x = document.getElementsByClassName("slideshowSchloga");
    for(i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideIndexSchloga++;
    if(slideIndexSchloga > x.length) {slideIndexSchloga=1}
    x[slideIndexSchloga-1].style.display="block";
    setTimeout(carouselSchloga, 2000);
}