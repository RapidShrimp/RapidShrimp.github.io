let slideIndex = 1;
let automaticScroll = 0;
let scrollingTime = 1000; //1 Second
showSlides();


//Enable Auto Scroll
function AutoScroll(isAuto){
    if(isAuto == 0) {automaticScroll = 0;}
    else{
        automaticScroll = 1;
        scrollTime * 1000;
        showSlides();
    }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function NextSlide() {
    slideIndex++;
    let slides = document.getElementsByClassName("mySlides");
    if(slideIndex > slides.length){
        slideIndex = 1;}
    showSlides(slideIndex);
  }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  if(automaticScroll == 1){
      setTimeout(NextSlide,scrollingTime); // Change image every 2 seconds
  }

}


