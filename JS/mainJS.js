
/*************** SLIDER ***********************/
var slide = document.querySelector('img.main');


var counter = 1;

var loop = setInterval(function () {
    counter++;
    (counter === 6) ? counter = 1 : counter = counter;
    slide.setAttribute('src', 'ASSETS/slajder_naslovna/slajder' + counter + '.jpg');

}, 2500);

/********************** SLIDER END *******************/

/******************** MENU LITLE********************/
var manuHamWrap = document.querySelector(".manuHamWrap");
var fasFa = document.querySelector(".fa-bars");

fasFa.addEventListener('click', function () {
    if (manuHamWrap.style.display === "none") {
        manuHamWrap.style.display = "block";
        fasFa.style.color = "#000";
    } else {
        manuHamWrap.style.display = "none";
        fasFa.style.color = "#807e79";
    }
});


/******************* SPA INDEX *******************************/
/*let links = document.getElementsByClassName("readmore");
let articles = document.getElementsByClassName("spa");
let lock = document.getElementsByClassName("lock")[0];
console.log(lock);
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (){
        for (var k = 0; k < articles.length; k++) {
          articles[k].style.display = "none";  
        }
        articles[i].style.display = "block";
        articles[i].className = articles[i].className.replace("two-column", "siroko");
        lock.style.overflow= "visible";
        this.style.display = "none";       
    };  
}*/



/************************* active ***********************/
let active = document.querySelector(".active");
let links= document.getElementsByClassName("navigate");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(){
        this.className = "active";
        active.className = "navigate";     
    }); 
}