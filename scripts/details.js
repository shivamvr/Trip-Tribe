
let localstorage_data = {
  package: "Holiday Package",
  trend: "most visited",
  duration: "5 nights and  6 days",
  location: "debai",
  country: "swizzerland",
  about:
    "Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.",
  star: 4.1,
  id: 1,
  name: "paris",
  price: 2678,
  review: 200,
  Image: [
    "https://www.frost.com/wp-content/uploads/2018/02/Dubai-Tourism-1080x675.jpg",
    "https://www.holidify.com/images/tooltipImages/JAIPUR.jpg",
    "https://www.holidify.com/images/tooltipImages/ANDAMAN.jpg",
  ],
  hotel: [
    {
      image:
        "https://cdn1.goibibo.com/voy_ing/t_g/b4082402d2b411e49a72daf4768ad8d9.jfif",
      name: "hotel regend",
      star: 4.5,
    },
    {
      image:
        "https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/200701241130593567-ljedfpug292ojaaj1sbkuoar005q.jpg",
      name: "rupam hotel",
      star: 4.0,
    },
    {
      image:
        "https://cdn1.goibibo.com/voy_ing/t_g/a2f842385cb311e789c4025f77df004f.jpg",
      name: "sarthak palace",
      star: 5.9,
    },
  ],
};

let main = document.querySelector("#main");
let hotel_append = document.querySelector("#similar");
let loading = document.querySelector(".center");
let container = [];

window.addEventListener("load", () => {
  api_coll();
});

async function api_coll() {
  let id = localStorage.getItem('location')
  let url = `https://645f3bf99d35038e2d1f5356.mockapi.io/locations/?id=${id}`;
    console.log(url)
    let res = await fetch(url);
    let details = await res.json();
    if(details.length>=1){
      container = details[0]
      details = details[0]
    }else{
      container = details
    }
    
    localStorage.setItem('price',details.price)
    localStorage.setItem('duration',details.Duration)
    appending(container);
}

function appending(ls_data) {
  main.innerHTML = "";
  let sign = false;
  let img = 0;
  let coursel;
  // creating element here
  let container_div = document.createElement("div");
  let title_div = document.createElement("div");
  let title = document.createElement("h1");
  let star = document.createElement("div");
  let review = document.createElement("p");

  let details_div = document.createElement("div");
  let image_div = document.createElement("div");
  let image = document.createElement("img");
  let data_div = document.createElement("div");
  let trend = document.createElement("p");
  let country = document.createElement("p");
  let price_div = document.createElement("div");
  let price = document.createElement("h1");
  let person = document.createElement("p");
  let about = document.createElement("p");
  let duration = document.createElement("p");
  let right = document.createElement("p");
  let left = document.createElement("p");
  let facility_div = document.createElement("div");
  let breakfast = document.createElement("p");
  let bus = document.createElement("p");
  let monument = document.createElement("p");
  let English = document.createElement("p");
  let flight = document.createElement("p");
  let button = document.createElement("button");
  let cancel=document.createElement('div');
  let p1=document.createElement('p');
  let p2=document.createElement('p');

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
  duration.className = "duration";
  trend.className = "trend";
  image_div.className = "image_div";
  right.className = "right";
  left.className = "left";
  cancel.className="cancel";


  // asign value here
  title.textContent = `${ls_data.package} : ${ls_data.location}`;
  let flag = false;
  if (+ls_data.rating === Math.floor(ls_data.rating)) {
    flag = true;
  }
  for (let index = 1; index <= Math.floor(+ls_data.rating); index++) {
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

  // image changing

  image.setAttribute("src", ls_data.image[img]);
  setInterval(() => {
    if (img == ls_data.image.length) {
      img = 0;
    }
    coursel = img;
    image.setAttribute("src", ls_data.image[img]);
    img++;
  }, 4000);

  right.addEventListener("click", () => {
    if (coursel === 0) {
      coursel = ls_data.image.length - 1;
      image.setAttribute("src", ls_data.image[coursel]);
    } else if (coursel >= 0) {
      coursel--;
      image.setAttribute("src", ls_data.image[coursel]);
    }
  });

  left.addEventListener("click", () => {
    coursel++;
    if (coursel === ls_data.image.length) {
      coursel = 0;
    }
    if (coursel < ls_data.image.length) {
      image.setAttribute("src", ls_data.image[coursel]);
    }
  });

  country.textContent = `${ls_data.location} - ${ls_data.country}`;
  price.textContent = ls_data.price;
  person.textContent = `/person`;
  duration.textContent = ls_data.Duration;
  trend.textContent = ls_data.trend ?? "best choice";
  about.textContent = ls_data.about;
  breakfast.innerHTML = `<i class="fa-solid fa-mug-saucer"></i> Breakfast at the Hotel`;
  bus.innerHTML = `<i class="fa-solid fa-car"></i> confotable transport`;
  English.innerHTML = `<i class="fa-solid fa-language"></i> english only`;
  monument.innerHTML = `<i class="fa-solid fa-mountain-sun"></i> monument Visit`;
  flight.innerHTML = `<i class="fa-solid fa-plane"></i> flight Available`;
  button.textContent = "check availability";
  right.innerHTML = `<i class="fa-solid fa-chevron-right fa-rotate-180"></i>`;
  left.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
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
      window.location = '/payment.html'
     
    }
  });
  p1.textContent='Free cancellation';
  p2.textContent='Up to 24 hours in advance.For a full refund, you must cancel at least 24 hours before the experience/’s start time.'

  hotel(localstorage_data.hotel); // colling hotel function


  // append here
  cancel.append(p1,p2);
  image_div.append(image, right, left);
  facility_div.append(breakfast, bus, monument, English, flight);
  price_div.append(price, person);
  data_div.append(
    trend,
    country,
    price_div,
    duration,
    about,
    facility_div,
    button,
    cancel
  );
  details_div.append(image_div, data_div);
  title_div.append(title, star, review);
  container_div.append(title_div, details_div);
  main.append(container_div);
}

// hotel

function hotel(data) {
  hotel_append.innerHTML = "";

  data.forEach((element) => {
    let hotels = document.createElement("div");
    let hotel_image = document.createElement("img");
    let hotel_name = document.createElement("h1");
    let stars = document.createElement("p");

    hotel_image.className = "hotel_image";
    hotel_name.className = "hotel_name";
    stars.className = "hotel_star";

    hotels.addEventListener("click", () => {
      hotel_Show(element);
    });

    hotel_image.setAttribute("src", element.image);
    hotel_name.textContent = element.name;
    stars.innerHTML = `<i class="fa-solid fa-star"></i> ${element.star}`;
    hotels.append(hotel_image, hotel_name, stars);
    hotel_append.append(hotels);
  });
}

function hotel_Show(data) {
  let display = document.querySelector("#hotel-display");
  let display_data = document.querySelector("#shown");
  let cross=document.querySelector(".fa-rectangle-xmark")

  display.style.display = "block";
  display_data.innerHTML = "";

  let image = document.createElement("img");
  let names = document.createElement("p");
  let star = document.createElement("p");

  image.setAttribute("src", data.image);
  names.textContent = data.name;
  star.innerHTML = `<i class="fa-solid fa-star"></i> ${data.star}`;

  display_data.append(image, names, star);


  cross.addEventListener('click',()=>{
  setTimeout(() => {
     display.style.display = "none";
  }, 300);
  })
}
