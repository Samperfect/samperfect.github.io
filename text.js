// slide show effect
// onload = alert("");

onload = document.getElementById('playaudio').play();


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// animation scroll effect

// window.onscroll = function() {
//   myFunction();
// };

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("go").className = "gone";
  } else {
    document.getElementById("go").className = "header-wrap";
  }
}

// $(window).scroll(function() {
//   $("#slide").each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 400) {
//       $(this).addClass("fadeIn");
//     }
//   });
// });

// $(window).scroll(function() {
//   $("#pics1").each(function() {
//     var imagePos = $(this).offset().top;
//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 200) {
//       $(this).addClass("slideRight");
//     }
//   });
// });

// $(window).scroll(function() {
//   $("#pics2").each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 200) {
//       $(this).addClass("pulse");
//     }
//   });
// });

// $(window).scroll(function() {
//   $("#pics3").each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 200) {
//       $(this).addClass("fadeIn");
//     }
//   });
// });

// $(window).scroll(function() {
//   $("#pics4").each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 200) {
//       $(this).addClass("expandOpen");
//     }
//   });
// });

// $(window).scroll(function() {
//   $("#pics5").each(function() {
//     var imagePos = $(this).offset().top;

//     var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow + 200) {
//       $(this).addClass("floating");
//     }
//   });
// });
