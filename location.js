
//---------- Authentication----
let userStatus = localStorage.getItem('status')
 userStatus = JSON.parse(userStatus)

 let user = localStorage.getItem('status') 
 user = JSON.parse(user)
let signUp = document.getElementById('sign-up')
let profile = document.getElementById('profile')
let username = document.querySelector('#profile > div > div:nth-child(1)')
let signOutBtn = document.querySelector('#profile > div > div:nth-child(2)')

if(userStatus && userStatus.login){
 signUp.style.display = 'none'
 profile.style.display = 'block'
 username.innerHTML = user.name
}else{
 profile.style.display = 'none'
}

//--------------Sign-up--------------
signUp.onclick = ()=>{
  window.location = '/signup.html'
}

// ---------------Page-redirection-------

let home = document.getElementById('home')
let discover = document.getElementById('discover')
let locations = document.getElementById('locations')
let about = document.getElementById('about')
let support = document.getElementById('support')
let menu = document.getElementById('menu')
let menuIcon = document.getElementById('menu-icon')
let profileWrapper = document.querySelectorAll('.menu-wrapper')[1]
// console.log(profileWrapper)
let menuWrapper = document.querySelector('.menu-wrapper')
// console.log(menuWrapper)
let body = document.body

locations.onclick = () => {
    window.location = '/locations.html'
}
about.onclick = () => {
    window.scrollTo(0, 3850);
}

//-----------------Event-handlers-------


let search = document.getElementById('search')
let searchSection = document.getElementById('search-section')

search.onclick = (e) => {
    profileWrapper.style.display = 'none'
    menuWrapper.style.display = 'none'
     searchSection.style.display = 'block'
    e.stopPropagation() 
}
profile.onclick = (e) => {
    profileWrapper.style.display = 'block'
    searchSection.style.display = 'none'
    e.stopPropagation() 
}
menu.onclick = (e) => {
     e.stopPropagation() 
}
menuIcon.onclick = (e) => {
    if(menuWrapper.style.display == 'block'){
        menuWrapper.style.display = 'none'
    }else{
        menuWrapper.style.display = 'block'
        searchSection.style.display = 'none'
    }
}
    
body.onclick = ()=>{
    profileWrapper.style.display = 'none'
    menuWrapper.style.display = 'none'
    searchSection.style.display = 'none'
}


signOutBtn.onclick = ()=>{
 localStorage.setItem('user',null)
 localStorage.setItem('status',null)
 window.location.reload()
}


function goToDetail(id){
 localStorage.setItem('location',id)
 window.location = '/details.html'
}

// -------------------------Searching-functionality------------
let searchInput = document.querySelector('#search-section > input')
let searchItems = document.getElementById('search-items')
searchInput.onkeyup = () =>{
 let data = [
    {
        "id": 1,
        "location": "Dubai",
        "country": "UAE"
    },
    {
        "id": 2,
        "location": "Male",
        "country": "Maldives"
    },
    {
        "id": 3,
        "location": "Bhutan",
        "country": "Bhutan"
    },
    {
        "id": 4,
        "location": "Santorini",
        "country": "Greece"
    },
    {
        "id": 5,
        "location": "Bali",
        "country": "Indonesia"
    },
    {
        "id": 6,
        "location": "Tokyo",
        "country": "Japan"
    },
    {
        "id": 7,
        "location": "Queenstown",
        "country": "New Zealand"
    },
    {
        "id": 8,
        "location": "Rio de Janeiro",
        "country": "Brazil"
    },
    {
        "id": 9,
        "location": "Kyoto",
        "country": "Japan"
    },
    {
        "id": 10,
        "location": "Barcelona",
        "country": "Spain"
    },
    {
        "id": 11,
        "location": "Seoul",
        "country": "South Korea"
    },
    {
        "id": 12,
        "location": "Cape Town",
        "country": "South Africa"
    },
    {
        "id": 13,
        "location": "Rome",
        "country": "Italy"
    },
    {
        "id": 14,
        "location": "Machu Picchu",
        "country": "Peru"
    },
    {
        "id": 15,
        "location": "Mizoram",
        "country": "India"
    },
    {
        "id": 16,
        "location": "Venice",
        "country": "Italy"
    },
    {
        "id": 17,
        "location": "Sydney",
        "country": "Australia"
    },
    {
        "id": 18,
        "location": "Frisian Islands",
        "country": "Netherlands"
    },
    {
        "id": 19,
        "location": "Virgin Islands",
        "country": "United States"
    },
    {
        "id": 20,
        "location": "Beijing",
        "country": "China"
    }
]
 let term = searchInput.value.toLowerCase()
 console.log(term)
 let searchResults = data.filter((e)=>{
    let lowerCaseLocation = e.location.toLowerCase()
    let lowerCaseCountry = e.country.toLowerCase()
    if(term.length>=3 &&( lowerCaseLocation.includes(term) || lowerCaseCountry.includes(term)) ){
        return e
    }
 })
 console.log(searchResults)
 mapSearchResult(searchResults)
}

function mapSearchResult(data){
    searchItems.innerHTML = ''
    let label = document.createElement('p')
    label.id = 'search-label'
    label.innerText = 'Search Results:'
    searchItems.append(label)
    data.forEach((e,i) => {
     let link = document.createElement('a')
     link.textContent = e.location
     link.href = '#'
     link.onclick = (b) => {
        b.preventDefault()
        goToDetail(e.id)
    }
    searchItems.append(link)
    });
}



// div with location details

let locationdet = document.getElementById("locationdetail");

let maindiv = document.createElement("div");
maindiv.setAttribute("class", "locdetail");

let imgdiv = document.createElement("div");
imgdiv.setAttribute("class", "imgdiv");

let detdiv = document.createElement("div");
detdiv.setAttribute("class","detdiv");

let image = document.createElement("img");
image.setAttribute("class","searchimg");

let h1 = document.createElement("h3");
h1.setAttribute("id","placeName");

let price = document.createElement("h3");
price.setAttribute("class","placeprice");

let country = document.createElement("h4");
country.setAttribute("class", "detcountry");

let button = document.createElement("button");
button.setAttribute("class","booking");
button.innerHTML="Book now";
button.addEventListener("click",()=>{
    window.location.href = "./payment.html";
})













