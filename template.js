var boolean = false;

function openNav(){
    let x = document.getElementById("MobileUl");
    let y = document.getElementsByTagName("footer");
    console.log(x);
    console.log(y);
    if(!boolean){
        x.style.display = "block";
        y[0].style.display = "none";
        boolean = true;
    }else{
        x.style.display = "none";
        y[0].style.display = "flex";
        boolean = false;
    }
}