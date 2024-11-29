const root = document.getElementById("root");

const html = document.createElement("div");
root.classList.add("mega-container");
html.classList.add("container");

shirts.forEach((shirt, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<figure>
    <img src=${shirt?.colors?.white?.front || shirt.default.front}>
    <figcaption>
      <h2 class="name">${shirt.name}</h2>
      <div class="info-text">Available in ${
        Object.keys(shirt.colors).length
      } colors</div>
      </figcaption>
      <div class="buttons">
      <button class="view" id="${i}">Quick view</button>
      <button class="see-page" id="${i}">See page</button>
      </div>
    </figure>`;
  html.appendChild(div);
});

root.appendChild(html);

let megaContainer = document.querySelector(".mega-container");
let quickViews = document.querySelectorAll(".view");
let pages = document.querySelectorAll(".see-page");

megaContainer.addEventListener("click", (event) => {
  for (let view of quickViews) {
    if (event.target == view) {
      openModal(view.getAttribute("id"));
    }
  }
  for (let page of pages) {
    if (event.target == page) {
      seePage(page.getAttribute("id"));
    }
  }
});

function openModal(id) {
  document.querySelector(".shirt-name").innerHTML = shirts[id].name;
  document.querySelector(".shirt-price").innerHTML = shirts[id].price;

  document
    .querySelector("#front")
    .setAttribute("src", shirts[id].colors.white.front);
  document
    .querySelector("#back")
    .setAttribute("src", shirts[id].colors.white.back);

  let modal = document.querySelector(".modal");
  modal.showModal();
  modal.addEventListener("click", () => {
    modal.close();
  });
}

function seePage(id) {
  localStorage.setItem("shirtInfo", JSON.stringify(shirts[id]));
  window.location.href = "../lab2/index.html";
}
