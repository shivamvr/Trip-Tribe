let localstorage_data = JSON.parse(localStorage.getItem("data"));
let main = document.querySelector("#main");
let loading = document.querySelector(".center");
let container = [];

window.addEventListener("load", () => {
  api_coll();
});

async function api_coll() {
  let url = "https://644d0d9757f12a1d3dd6931d.mockapi.io/user";
  try {
    let res = await fetch(url);
    let details = await res.json();
    container = details;
    appending(localstorage_data, details);
  } catch (error) {
    console.log(error.message);
  }
}

function appending(ls_data, api_data) {
  main.innerHTML = "";
  let sign = false;
  // creating element here
  let container_div = document.createElement("div");
  let title_div = document.createElement("div");
  let title = document.createElement("h1");
  let star = document.createElement("div");
  let review = document.createElement("p");

  let details_div = document.createElement("div");
  let image = document.createElement("img");
  let data_div = document.createElement("div");
  let country = document.createElement("p");
  let price_div = document.createElement("div");
  let price = document.createElement("h1");
  let person = document.createElement("p");
  let about = document.createElement("p");

  let facility_div = document.createElement("div");
  let breakfast = document.createElement("p");
  let bus = document.createElement("p");
  let monument = document.createElement("p");
  let English = document.createElement("p");
  let flight = document.createElement("p");
  let button = document.createElement("button");

  // append id and class here
  container_div.className = "container";
  title_div.className = "title_div";
  details_div.className = "details_div";
  title.className = "title";
  star.className = "star";
  review.className = "review";
  image.className = "image";
  data_div.className = "data_div";
  country.className = "country";
  price_div.className = "price_div";
  about.className = "about";
  facility_div.className = "facility_div";
  button.className = "book";
  person.className = "person";

  // asign value here
  title.textContent = `holiday package : ${ls_data.name}`;
  let flag = false;
  if (+ls_data.star === Math.floor(ls_data.star)) {
    flag = true;
  }
  for (let index = 1; index <= Math.floor(+ls_data.star); index++) {
    let st = document.createElement("p");
    st.innerHTML = `<i class="fa-solid fa-star"></i>`;
    star.append(st);
  }
  if (flag == false) {
    let st = document.createElement("p");
    st.innerHTML = ` <i class="fa-solid fa-star-half-stroke"></i>`;
    star.append(st);
  }
  review.textContent = `(${ls_data.review} reviews)`;
  image.setAttribute("src", ls_data.Image);
  country.textContent = `Bus - ${ls_data.country}`;
  price.textContent = ls_data.price;
  person.textContent = `/person`;
  about.textContent = ls_data.about;
  breakfast.innerHTML = `<i class="fa-solid fa-mug-saucer"></i> Breakfast at the Hotel`;
  bus.innerHTML = `<i class="fa-solid fa-car"></i> confotable transport`;
  English.innerHTML = `<i class="fa-solid fa-language"></i> english only`;
  monument.innerHTML = `<i class="fa-solid fa-mountain-sun"></i> monument Visit`;
  flight.innerHTML = `<i class="fa-solid fa-plane"></i> flight Available`;
  button.textContent = "check availability";

  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (sign == false) {
      setTimeout(() => {
        loading.style.display = "flex";
        sign = true;
      }, 300);

      setTimeout(() => {
        loading.style.display = "none";
        button.textContent = "click to book";
        button.id = "boook";
      }, 3000);
    } else {
      alert("thank you for booking");
    }
  });

  // append here
  facility_div.append(breakfast, bus, monument, English, flight);
  price_div.append(price, person);
  data_div.append(country, price_div, about, facility_div, button);
  details_div.append(image, data_div);
  title_div.append(title, star, review);
  container_div.append(title_div, details_div);
  main.append(container_div);
}
