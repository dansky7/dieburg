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




var veranstaltungenClicked = false;
var z1 = document.getElementById("VeranstaltungenAnchor1");
var z2 = document.getElementById("VeranstaltungenAnchor2");
console.log(z1);
console.log(z2);
z1.addEventListener("click", addVeranstaltungen);
z2.addEventListener("click", addVeranstaltungen);

function addVeranstaltungen(){
    
    if(!veranstaltungenClicked){
        addVeranstaltungenStylesheet();
        if(this == z2) openNav();
        let template = document.getElementById("Veranstaltungen");
        console.log(template);
        let clon = template.content.cloneNode(true);
        console.log(clon);
        document.getElementById("content").appendChild(clon);
        z1.style.textDecoration = "underline black";
        z2.style.textDecoration = "underline black";
        z1.style.color = "black";
        z2.style.color = "black";
        veranstaltungenClicked = true;
    }else{
        removeVeranstaltungenStylesheet();
        if(this == z2) openNav();
        document.getElementById("content").innerHTML = "";
        z1.style.textDecoration = "none";
        z2.style.textDecoration = "none";
        z1.style.color = "white";
        z2.style.color = "white";
        veranstaltungenClicked = false;
    }
}


function addVeranstaltungenStylesheet(){
    var link = document.createElement("link");
    link.href= "contentVeranstaltungen.css";
    link.type= "text/css";
    link.rel = "stylesheet";
    
    document.getElementsByTagName("head")[0].appendChild(link);
}
function removeVeranstaltungenStylesheet(){
    document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName("head")[0].lastChild);
}