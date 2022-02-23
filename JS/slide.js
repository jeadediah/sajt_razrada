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
// ***************   MOJ PRVI SLAJDER - MOJA LOGIKA   ***********************

function createSlideshow(a, b, c, d, e) {

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

createSlideshow("mySlides", "dot", "next", "prev", " actives");

/******************************* CUSTOM VIDEO PLAYER *************************/
(function () {
    function VideoXXX(id) {
        this.videoWraper = document.querySelector("#" + id),
                this.play = this.videoWraper.querySelector(".play"), // iz videoWrapera selektujemo sada cve: play, reload, video
                this.reload = this.videoWraper.querySelector(".reload"),
                this.video = this.videoWraper.querySelector("#video"),
                this.init = function () {
                    this.play.addEventListener("click", this.startVideo.bind(this));//this=videoXXX
                    this.reload.addEventListener("click", this.reloadVideo.bind(this));
                },
                this.startVideo = function () {
                    if (this.play.getAttribute("src") === 'ASSETS/video/playimg.png')
                    {
                        this.video.play();
                        this.play.setAttribute("src", "ASSETS/video/pauseimg.png");
                    } else {
                        this.video.pause();
                        this.play.setAttribute("src", "ASSETS/video/playimg.png");
                    }
                },
                this.reloadVideo = function () {
                    this.video.load();
                    this.play.setAttribute("src", "ASSETS/video/playimg.png");
                };
    }

    let video1 = new VideoXXX('video1').init();
    let video2 = new VideoXXX('video2').init();
    let video3 = new VideoXXX('video3').init();
})();


