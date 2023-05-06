
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
