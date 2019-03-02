var p = document.getElementsByTagName("p");

changeColor();

function changeColor(){
    p[0].style.color = "red";
    setTimeout(()=>{
        p[0].style.color = "blue";
        setTimeout(()=>{
            p[0].style.color = "green";
            changeColor();
        },1000);
    }, 1000);
    
}