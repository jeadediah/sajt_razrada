
// ***************   MOJ PRVI SLAJDER - MOJA LOGIKA   ***********************

/*function createSlideshow(a,b,c,d,e){
    
    function selector(className) {
    return document.getElementsByClassName(className);
}
var slides = selector(a);
var dot = selector(b);
var right = selector(c)[0];
var left = selector(d)[0];

var index = 0;
slides[index].style.display = "block";
dot[index].className += e;

// RIGHT ARROW
right.addEventListener("click", rightscroll);
function rightscroll() {
    index++;
    if (index < slides.length) { //4
        slides[index - 1].style.display = "none";
        slides[index].style.display = "block";
        dot[index - 1].className = dot[index - 1].className.replace(e, "");
        dot[index].className += e;
    } else {
        slides[index - 1].style.display = "none";
        dot[index - 1].className = dot[index - 1].className.replace(e, "");
        index = 0;
        slides[index].style.display = "block";
        dot[index].className += e;
    }
}
//LEFT ARROW
left.addEventListener("click", leftscroll);
function leftscroll() {
    index--;
    if (index !== -1) {
        slides[index].style.display = "block";
        slides[index + 1].style.display = "none";
        dot[index].className += e;
        dot[index + 1].className = dot[index + 1].className.replace(e, "");

    } else {
        slides[index + 1].style.display = "none";
        dot[index + 1].className = dot[index + 1].className.replace(e, "");
        index = (slides.length - 1); //3
        slides[index].style.display = "block";
        dot[index].className += e;
    }
}
}

createSlideshow("mySlides","dot","next","prev"," actives");
createSlideshow("mySlides2","dot2","next2","prev2"," actives2");*/

/******************** DISPLAY BASIS SPA CONCEPT *********************/

function selectElement(className) {
    return document.getElementsByClassName(className);
}

let selectfield = selectElement("basis");
let links = selectElement("projectslinksbasis");


for (var i = 0; i < selectfield.length; i++) {
    selectfield[i].style.display = "none";
}

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function () {
        //e.preventDefault()
        let attribut = this.getAttribute('data-id');
        for (var k = 0; k < selectfield.length; k++) {
            if (attribut === selectfield[k].getAttribute("id")) {
                selectfield[k].style.display = "block";
                for (var j = 0; j < links.length; j++) {
                    //links[j].className = links[j].className.replace(" active", "");
                    links[j].style.display = "block";
                }
                //this.className += " active";
                this.style.display = "none";
            } else {
                selectfield[k].style.display = "none";
            }
            ;
        }
    });
}

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
