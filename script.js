let calcForm = document.querySelector("form");
let inputTime = document.querySelector("#input-temp");
let inputVm = document.querySelector("#input-vm");
let inputDist = document.querySelector("#input-dist");
let result = document.querySelector(".result");

function calc(event) {
  event.preventDefault();
  console.log(inputDist.value);
  if (inputTime.value === "") {
    const resultHoras = inputDist.value / inputVm.value;
    const resultMin = 60 * resultHoras;
    result.innerHTML = `<p>${resultMin} Min</p>`;
    result.innerHTML += `<p>${resultHoras.toFixed(1)} Horas</p>`;

  }
   else if (inputVm.value === "") {
    const resultKm = inputDist.value / inputTime.value;
    result.innerHTML = `<p>${resultKm} km/h.</p>`;
  }
  else if (inputDist.value === "") {
    const resultDist = inputVm.value * inputTime.value;
    result.innerHTML = `<p>${resultDist}</p>`;
  }
}

calcForm.addEventListener("submit", calc);
