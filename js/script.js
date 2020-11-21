import { getAllCountries } from "./api.js";

const listCountries = document.getElementById("listCountries");
const modal = document.getElementById("modal");
const modalBody = document.getElementById('modal-body');
const body = document.getElementsByTagName("body")[0];

let list = [];

const getCountries = async (limit) => {
  list = await getAllCountries();
  list = list.slice(0, limit);
  list.forEach((country) => {
    let html = `
    <div class='col'>
      <article class='card'>
        <header class='card-header'>
          <div>
            <h1 class='card-title pointer' onclick="handleOpenModal('${country.alpha2Code}')">${country.name}</h1>
            <strong class='card-subtitle'>(${country.cioc})</strong>      
          </div>
          <img class='card-image' src='${country.flag}'></img>    
        </header>
        <div class='card-body'>
          <div class='card-detail'>
            <p>CAPITAL</p>
            <strong> ${country.capital} </strong>
          </div>
          <div class='card-detail'>
            <p>POPULATION</p>
            <strong> ${country.population} </strong>
          </div>
          <div class='card-detail'>
            <p>CURRENCIE</p>
            <strong> ${country.currencies[0].code} </strong>
          </div>
        </div>
      </article>
    </div>`;

    listCountries.innerHTML += html;
  });
};

window.handleOpenModal = (countryCode) => {
  const country = list.find(itemCountry => itemCountry.alpha2Code === countryCode );
  let html = `
    <p><h3> CONTINENTE </h3></p>
    <p><strong> ${country.region} </strong></p>
  `;
  modalBody.innerHTML=html;
  modal.style.display = "flex";
  body.style.position = "static";
  body.style.height = "100%";
  body.style.overflow = "hidden";
  modal.classList.add("showModal");
};

window.handleCloseModal = () => {
  modal.style.display = "none";
  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
  modal.classList.remove("showModal");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
};

const init = async () => {
  await getCountries(12);
  
};
init();
