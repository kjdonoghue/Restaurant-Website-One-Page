// let menuDisplay = document.getElementByID("menuDisplay")
// let breakfastItems = document.getElementByID("breakfastItems")
// let lunchItems = document.getElementByID("lunchItems")
// let dinnerItems = document.getElementByID("dinnerItems")
// let drinkItems = document.getElementByID("drinkItems")
let slideIndex = 1
let slides = document.getElementsByClassName("slides")
showSlides(slideIndex)

// Hamburger Menu

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


// Slideshow

//previous or next
function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display="block"

    } 

    function displayMenu(meal) {
      if (meal == "breakfast") {
        menuDisplay.innerHTML = breakfastItems.innerHTML
      }
      if (meal == "lunch") {
        menuDisplay.innerHTML = lunchItems.innerHTML
      }
      if (meal == "dinner") {
        menuDisplay.innerHTML = dinnerItems.innerHTML
      }
      if (meal == "drink") {
        menuDisplay.innerHTML = drinkItems.innerHTML
      }

    }