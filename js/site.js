var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

/*Adding javaScript to loop and make the slides absolute incase the user has
javaScript on their computer*/
for(var i=0; i<slides.length; i++) {
    slides[i].style.position = 'absolute';
}

/* the funtion ti enable the next and previous button to cycle through the slides*/
function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

/*adding the play button features */
var playing = true;
var pauseButton = document.getElementById('pause');

/*the play and pause function*/
function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '&#10074;&#10074;';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

/*Adding the listener to the button when clicked by the user*/
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

/*Setting javaScript to show buttons if javaScript is avaibale*/
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

/*The log for my contacts*/
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
/*
<ol id="contact">
  <li>Email: <a href="mailto:jackjethro3@gmail.com">
        jackjethro3@gmail.com</a>.</li>
  <li>Cell: +1 (253) 111-2233</li>
</ol
*/

/* creating the click of contacts to appear when clicked by the user who has java available to them*/
$('#contact').remove();
$('#personal').one('click', function() {
    var newline1 = $('<ol id="contact"> <li>Email: <a href="mailto:jackjethro3@gmail.com">jackjethro3@gmail.com </a>.</li> <li>Cell: +1 (253) 111-2233</li> </ol ');
    $('#personal').append(newline1);
  });
