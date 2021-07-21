var slideIndex = 1;
showSlides(slideIndex);

function tambahSlide(n){
    showSlides(slideIndex += n);
}

function slideSekarang(n) {
    showSlides(slideIndex = n );
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideAlbum");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activate", "");    
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "activate";
}