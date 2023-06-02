
/*Animacie zobrazenia*/
//Zlava do prava
function reveal2() {
    var reveals = document.querySelectorAll(".zobrazenie2");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var triggerPoint = windowHeight * 0.75; // Adjust the trigger point as needed
  
      if (elementTop < triggerPoint) {
        reveals[i].classList.add("active2");
      } else {
        reveals[i].classList.remove("active2");
      }
    }
  }
  window.addEventListener("scroll", reveal2);

//Zprava do lava
function reveal3() {
    var reveals = document.querySelectorAll(".zobrazenie3");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var triggerPoint = windowHeight * 0.75; // Adjust the trigger point as needed
  
      if (elementTop < triggerPoint) {
        reveals[i].classList.add("active3");
      } else {
        reveals[i].classList.remove("active3");
      }
    }
  }
  window.addEventListener("scroll", reveal3);

  //Zdola hore
function reveal() {
  var reveals = document.querySelectorAll(".zobrazenie");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 90;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);