
let container = document.querySelector("#container")
async function fetchData(data = "products") {
    if (data == "products") {
        try {
            let res = await fetch(`https://rotten-writing-6104-data.onrender.com/places/`)
            res = await res.json();
            displayProduct(res);
        }
        catch (error) {
            console.log(error)
        }
    }
    else if (data == "users") {
        try {
            let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/${data}`)
            res = await res.json();
            displayUsers(res)
        } catch (error) {
            console.log(error)
        }
    }
    else if (data == "employees") {
        try {
            let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/${data}`)
            res = await res.json();
            displayEmployees(res)
        } catch (error) {
            console.log(error)
        }

    }
    else if (data == "ourteam") {
        try {
            let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/${data}`)
            res = await res.json();
            displayOurTeam(res)
        }
        catch (error) {
            console.log(error)
        }
    }

}
fetchData();
let data = document.querySelectorAll("span")
data.forEach(el => {
    el.addEventListener("click", () => {
        fetchData(el.id)
    })
});


function displayProduct(arr) {
    container.innerHTML = ""
    container.className = ''
    let addProduct=document.createElement("button")
    addProduct.innerText="Add location"
    addProduct.addEventListener("click",()=>{
        document.querySelector("#popup-background").style.display="flex"
        document.body.style.overflow = 'hidden'
        document.querySelector("#addIphone").click()
    })
    addProduct.setAttribute("class","addData")
    container.append(addProduct)
    
    container.setAttribute("class", "displayProduct")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        let div2 = document.createElement("div")
        let battery = document.createElement("p")
        let type = document.createElement("p")
        let price = document.createElement("p")
        let camera=document.createElement("p");
        camera.innerHTML=`Country :- <b>${arr[i].country}</b>`;
        let button = document.createElement("button")
        image.src = arr[i].image[0];
        // title.innerText = arr[i].title;
        type.innerHTML = `Location :- <b>${arr[i].location}</b>`;
        battery.innerHTML = `Duration :- <b>${arr[i].Duration}</b>`;
        price.innerHTML = `Price :- <b> ₹ ${arr[i].price}</b>`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            async function DeleteProducts() {
                try {
                    let res = await fetch(`https://rotten-writing-6104-data.onrender.com/places/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteProducts();
            arr.splice(i, 1)
            displayProduct(arr);
        })
        div1.append(image)
        div2.append(type,camera, battery,price)
        card.append(div1, div2, button)
        container.appendChild(card)

    }
}

function displayUsers(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayUser")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div")
        let div1 = document.createElement("div")
        let image = document.createElement("img")
        let div2 = document.createElement("div")
        let name = document.createElement("h1")
        let phone = document.createElement("p")
        let gender = document.createElement("p")
        let button = document.createElement("button")
        if (arr[i].gender == "male")
            image.src = "images/icon_men.png";
        else
            image.src = "images/icon_women.png"
        name.innerText = arr[i].name;
        phone.innerHTML = `<b>Phone :- </b>${arr[i].phone}`
        gender.innerHTML = `<b>Gender :- </b>${arr[i].gender}`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            console.log(arr[i])
            async function DeleteUser() {
                try {
                    let res = await fetch(`https://63f63abd59c944921f6ff45a.mockapi.io/users/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteUser();
            arr.splice(i, 1)
            displayUsers(arr)
        })
        div1.append(image)
        div2.append(name, phone, gender, button)
        card.append(div1, div2)
        container.append(card)
    }
}
function displayEmployees(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayUser")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div");
        let div1 = document.createElement("div");
        let image = document.createElement("img");
        let div2 = document.createElement("div");
        let name = document.createElement("h1");
        let department = document.createElement("p");
        let phone = document.createElement("p");
        let gender = document.createElement("p");
        let salary = document.createElement("p");
        let button = document.createElement("button");
        if (arr[i].gender == "male")
            image.src = "images/icon_men.png";
        else
            image.src = "images/icon_women.png"
        name.innerText = arr[i].name;
        phone.innerHTML = `<b>Phone :- </b>${arr[i].phone}`
        department.innerHTML = `<b>Department :- </b>${arr[i].department}`
        gender.innerHTML = `<b>Gender :- </b>${arr[i].gender}`;
        salary.innerHTML = `<b>Salary :- </b>${arr[i].salary}`;
        button.innerText = "Remove"
        button.setAttribute("class", "remove")
        button.addEventListener("click", () => {
            console.log(arr[i])
            async function DeleteUser() {
                try {
                    let res = await fetch(`https://63f9922f897af748dcc04877.mockapi.io/employees/${arr[i].id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            DeleteUser();
            arr.splice(i, 1)
            displayUsers(arr)
        })
        div1.append(image)
        div2.append(name, department, phone, gender, salary, button)
        card.append(div1, div2)
        container.append(card)
    }
}
function displayOurTeam(arr) {
    container.innerHTML = ""
    container.className = '';
    container.setAttribute("class", "displayOurTeam")
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement("div");
        let div1 = document.createElement("div");
        let image = document.createElement("img");
        let div2 = document.createElement("div");
        let name = document.createElement("h1");
        let profession = document.createElement("p");
        let github = document.createElement("p");
        let linkdin = document.createElement("p");
        let email = document.createElement("p");
        image.src = arr[i].image;
        name.innerText = arr[i].name;
        github.innerHTML = `<b>Github :- </b><a href="${arr[i].github}">${arr[i].github}</a>`
        profession.innerHTML = `<b>Profession :- </b><a href="${arr[i].Profession}">${arr[i].Profession}</a>`
        linkdin.innerHTML = `<b>Linkdin :- </b><a href="${arr[i].linkdin}">${arr[i].linkdin}</a>`;
        email.innerHTML = `<b>Gmail :- </b><a href="${arr[i].email}">${arr[i].email}</a>`;
        div1.append(image)
        div2.append(name, profession, github, linkdin, email)
        card.append(div1, div2)
        container.append(card)
    }
}
document.querySelector("#close").addEventListener("click",()=>{
    document.querySelector("#popup-background").style.display="none"
    document.body.style.overflow = 'auto'
})

let form=document.querySelector("form")
document.querySelector("#addIphone").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("#item").innerText="";
    form.innerHTML=""
    form.innerHTML=`<input type="url" id="image" placeholder="Image URL">
        <input type="text" id="location" placeholder="Location">
        <input type="text" id="country" placeholder="Country">
        <input type="number" name="price" id="price" placeholder="Price">
        <input type="text" name="duration" id="duration" placeholder="Duration">
        <input type="text" id="package" placeholder="Package">
        `
        let button=document.createElement("button")
        button.innerText="Add"
        button.addEventListener("click",(e)=>{
            e.preventDefault()
            let obj={
                image:[form.image.value,form.image.value],
                location :form.location.value,
                country:form.country.value,
                Duration: form.duration.value,
                price:form.price.value,
                package:form.package.value,
            }
            console.log(obj)
            updateData(obj)
        })
        form.append(button)
})


async function updateData(obj){
    let res =await fetch("https://rotten-writing-6104-data.onrender.com/places",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
     console.log(res)
    setTimeout(location.reload(),2)
}