let shirtInfo = JSON.parse(localStorage.getItem("shirtInfo"));

const root = document.getElementById("root");

const html = document.createElement("div");
html.classList.add("container");

html.innerHTML = `<div class="container">
      <div class="header">
        <h1>${shirtInfo.name}</h1>
      </div>
      <div class="info-block">
        <div class="info-photo">
          <img src="../lab1/${shirtInfo.colors.white.front}" class="photo">
        </div>
        <div class="info-text">
          <span class="price">$${shirtInfo.price}</span>
          <p class="description">${shirtInfo.description}</p>
          <div class="mega-buttons-cont">
            <div class="buttons-cont">
              <span class="mini-info">Side:</span>
              <button class="btn" id="front">Front</button>
              <button class="btn" id="back">Back</button>
            </div>
            <div class="buttons-cont" id="color-cont">
              <span class="mini-info">Color:</span>
              
          </div>
        </div>
      </div>
    </div>`;
root.appendChild(html);

document.querySelector("h1").innerHTML = shirtInfo.name;
document
  .querySelector(".photo")
  .setAttribute("src", `../lab1/${shirtInfo.colors.white.front}`);
document.querySelector(".price").innerHTML = shirtInfo.price;
document.querySelector(".description").innerHTML = shirtInfo.description;

let pickedColor = "white";
let pickedSide = "front";

let buttonsContainer = document.querySelector("#color-cont");
let allButtons = [];

for (let color in shirtInfo.colors) {
  let colorButton = document.createElement("button");

  colorButton.classList.add("btn");
  colorButton.setAttribute("id", `${color}`);
  colorButton.style.backgroundColor = `${color}`;
  colorButton.innerHTML = `${color}`;

  allButtons.push(colorButton);
  buttonsContainer.appendChild(colorButton);
}

buttonsContainer.addEventListener("click", () => {
  for (let btn of allButtons) {
    if (event.target == btn) {
      let color = btn.getAttribute("id");
      pickedColor = color;
      document
        .querySelector(".photo")
        .setAttribute("src", `../lab1/${shirtInfo.colors[color][pickedSide]}`);
    }
  }
});

let changeSideToFrontBtn = document.querySelector("#front");
let changeSideToBackBtn = document.querySelector("#back");

changeSideToBackBtn.addEventListener("click", () => {
  pickedSide = "back";
  document
    .querySelector(".photo")
    .setAttribute(
      "src",
      `../lab1/${shirtInfo.colors[pickedColor][pickedSide]}`
    );
});

changeSideToFrontBtn.addEventListener("click", () => {
  pickedSide = "front";
  document
    .querySelector(".photo")
    .setAttribute(
      "src",
      `../lab1/${shirtInfo.colors[pickedColor][pickedSide]}`
    );
});
