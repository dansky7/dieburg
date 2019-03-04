// nav Button
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


// template Startseite
var content = document.getElementById("content");
var startseiteClicked = true;
var s = document.getElementsByClassName("StartseiteAnchor");
console.log(s);
s[0].addEventListener("click", addStartseite);
s[1].addEventListener("click", addStartseite);
function addStartseite(){
    content.innerHTML="";
    if(startseiteClicked){  // remove
        if(this == s[1]) openNav();
        s[0].style.textDecoration = "none";
        s[1].style.textDecoration = "none";
        s[0].style.color = "white";
        s[1].style.color = "white";
        startseiteClicked = false;
    }else{  // add
        if(this == s[1]) openNav();
        let template = document.getElementById("Startseite");
        let clon = template.content.cloneNode(true);
        content.appendChild(clon);
        s[0].style.textDecoration = "underline black";
        s[1].style.textDecoration = "underline black";
        s[0].style.color = "black";
        s[1].style.color = "black";
        startseiteClicked= true;
    }
}


// template Veranstaltungen
var veranstaltungenClicked = false;
var z1 = document.getElementById("VeranstaltungenAnchor1");
var z2 = document.getElementById("VeranstaltungenAnchor2");
console.log(z1);
console.log(z2);
z1.addEventListener("click", addVeranstaltungen);
z2.addEventListener("click", addVeranstaltungen);
function addVeranstaltungen(){
    content.innerHTML="";
    if(!veranstaltungenClicked){ // add
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
    }else{   // remove
        removeVeranstaltungenStylesheet();
        if(this == z2) openNav();
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