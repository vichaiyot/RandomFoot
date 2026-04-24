import { notSpicy } from "./notspicy.js";
import { spicy } from "./spicy.js";

const modla = document.getElementById("02id");


function getRandomMenu(menuArray) {
  const index = Math.floor(Math.random() * menuArray.length);
  return menuArray[index];
}


function createModal(menu) {
  return `
    <div onclick="Close()" class="modla-bg">
      <div class="modla-box">
        <div class="modla-con">
          <a onclick="Close()" class="close">&times;</a>
          <h4>เมนูที่ได้</h4>

          <div class="img-item">
            <img src="${menu.img}" alt="">
          </div>

          <h2>${menu.name}</h2>
        </div>
      </div>
    </div>
  `;
}


function handlaButtonClick() {
  const selectElement = document.getElementById("Select");
  const selectedValue = selectElement.value;

  if (selectedValue === "spicy") {
    const menu = getRandomMenu(spicy);
    modla.innerHTML = createModal(menu);
    modla.style.display = "block";
  } 
  else if (selectedValue === "notSpicy") {
    const menu = getRandomMenu(notSpicy);
    modla.innerHTML = createModal(menu);
    modla.style.display = "block";
  } 
  else {
    Swal.fire({
      icon: "warning",
      title: "กรุณาเลือกก่อนนะครับผม!"
    });
    modla.style.display = "none";
  }
}


function Close() {
  modla.style.display = "none";
}


function clickDd() {
  document.getElementById("Dd").style.display = "block";
}


window.onclick = function (event) {
  if (!event.target.matches(".bar")) {
    document.getElementById("Dd").style.display = "none";
  }
};


window.Close = Close;
window.handlaButtonClick = handlaButtonClick;
window.clickDd = clickDd;