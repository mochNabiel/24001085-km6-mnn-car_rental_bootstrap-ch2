document.addEventListener("DOMContentLoaded", function () {
  const mulaiSewaButton = document.querySelector("#btn-sewa-mobil");
  if (mulaiSewaButton) {
    mulaiSewaButton.addEventListener("click", function () {
      window.location.href = "/public/cars.html"; // Mengarahkan ke URL /cars
    });
  }
});
