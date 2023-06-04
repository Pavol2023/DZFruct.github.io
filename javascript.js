
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

const exampleModal = document.getElementById('Objednavka');
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const recipient = button.getAttribute('data-bs-whatever');
    const price = button.getAttribute('data-bs-price');

    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelector('#inputFruit'); // Unique ID for input field
    const modalPrice = exampleModal.querySelector('.modal-body p'); // Unique class for price element
    const quantityInput = exampleModal.querySelector('#inputQuantity'); // Unique ID for quantity input field
    const totalPriceElement = exampleModal.querySelector('.modal-body p:last-child'); // Last paragraph for total price

    modalTitle.textContent = recipient;
    modalBodyInput.value = recipient;
    modalPrice.textContent = `${price}€/kg`;

    quantityInput.addEventListener('input', () => {
      const quantity = parseFloat(quantityInput.value);
      const pricePerKg = parseFloat(price);
      const totalPrice = quantity * pricePerKg;

      if (!isNaN(totalPrice)) {
        totalPriceElement.textContent = `${totalPrice.toFixed(2)}€`;
      } else {
        totalPriceElement.textContent = '0.00€';
      }
    });
  });
}

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('inputQuantity').value = 1; // Reset quantity to 1
});



