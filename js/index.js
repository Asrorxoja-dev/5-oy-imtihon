import { updateUI, aboutCountry } from "./functions.js";
const body = document.getElementById("body");
const cards = document.querySelector(".cards");
const input = document.querySelector("#input");
const select = document.querySelector(".select");
const card1 = document.querySelector(".card1");
const nav = document.querySelector(".nav");
const button = document.getElementById("button");

document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://frontend-mentor-apis-6efy.onrender.com/countries?limit=150&skip=4"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length) {
        data.data.forEach((countryData) => {
          let card1 = updateUI(countryData);
          cards.innerHTML += card1;
        });
      } else {
        console.log("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

input.addEventListener("keyup", function () {
  let inputSearch = input.value;
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${inputSearch}`
  )
    .then((res) => res.json())
    .then((data) => {
      cards.innerHTML = "";
      data.data.forEach((element) => {
        let card = updateUI(element);
        cards.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

function showLoader() {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.visibility = "visible";
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.visibility = "hidden";
  loaderContainer.style.opacity = "0";
}

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    showLoader();

    setTimeout(() => {
      hideLoader();
    }, 2000);
  }
};

const darkButton = document.querySelector("#dark-button");

const darkLight = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (darkLight) {
  body.classList.add("dark-mode");
}

darkButton &&
  darkButton.addEventListener("click", function (e) {
    e.preventDefault();

    darkLight
      ? localStorage.setItem("mode", "")
      : localStorage.setItem("mode", "darklight");

    body.classList.toggle("dark-mode");
  });







const countryAbout = document.querySelector(".countryAbout");

cards.addEventListener("click", function () {
  let country = JSON.parse(localStorage.getItem("country"));
  let slug = window.location.href.substring(window.location.href.search("id=" + 3));
  fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
    .then((res) => res.json())
    .then((data) => {
      if (slug == data.name.slug) {
        let tr = countryAbout(data);
        container.innerHTML = tr;
      }
      if (data.languages) {
        data.languages.forEach((item) => {
          const languages = document.querySelector("#languages");
          languages.innerHTML += `${item} `;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  if (slug == country.data[0].name.slug) {
    let tr = countryAbout(country.data[0]);
    cards.innerHTML = tr;
  }
  if (country.data[0].languages) {
    country.data[0].languages.forEach((item) => {
      const languages = document.querySelector("#languages");
      languages.innerHTML += `${item} `;
    });
  }
  

  console.log(country.data[0]);
});








const africa = document.querySelector("#dropdown-item-africa");
const america = document.querySelector("#dropdown-item-america");
const asia = document.querySelector("#dropdown-item-asia");
const europa = document.querySelector("#dropdown-item-europa");
const oceania = document.querySelector("#dropdown-item-oceania");

function createCard(data) {
  return `
  <a href="../pages/main.html?id=${data.name.slug}">
      <div id="card" class="card my-3" style="width: 18rem; cursor:pointer;">
      <img src="${data.flags.png}" class="card-img-top" alt="flag image">
      <div class="card-body2">
        <h5 class="card-title">${data.name.common}</h5>
        <div class="lh-1">
            <p class="card-text"><b>Population:</b> ${data.population}</p>
            <p class="card-text"><b>Region:</b> ${data.region}</p>
            <p class="card-text mb-4"><b>Capital:</b> ${data.capital[0]}</p>
        </div>
      </div>
        </div>
  </a>

  `;
}

africa &&
  africa.addEventListener("click", function () {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=Africa`
    )
      .then((res) => res.json())
      .then((data) => {
        cards.innerHTML = "";

        data &&
          data.data.forEach((data) => {
            let tr = createCard(data);
            cards.innerHTML += tr;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

america &&
  america.addEventListener("click", function () {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=Americas`
    )
      .then((res) => res.json())
      .then((data) => {
        cards.innerHTML = "";

        data &&
          data.data.forEach((data) => {
            let tr = createCard(data);
            cards.innerHTML += tr;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

asia &&
  asia.addEventListener("click", function () {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=Asia`
    )
      .then((res) => res.json())
      .then((data) => {
        cards.innerHTML = "";

        data &&
          data.data.forEach((data) => {
            let tr = createCard(data);
            cards.innerHTML += tr;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

europa &&
  europa.addEventListener("click", function () {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=Europe`
    )
      .then((res) => res.json())
      .then((data) => {
        mainContainer.innerHTML = "";

        data &&
          data.data.forEach((data) => {
            let tr = createCard(data);
            cards.innerHTML += tr;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

oceania &&
  oceania.addEventListener("click", function () {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=Oceania`
    )
      .then((res) => res.json())
      .then((data) => {
        cards.innerHTML = "";

        data &&
          data.data.forEach((data) => {
            let tr = createCard(data);
            cards.innerHTML += tr;
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
