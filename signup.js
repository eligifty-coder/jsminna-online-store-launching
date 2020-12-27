let email = document.querySelector('.email input')
let fname = document.querySelector('.name input')
let password = document.querySelector('.password input')
let tel = document.querySelector('.tel input')
let address = document.querySelector('.address input')
let gender = document.querySelector('.gender input')
let btn= document.querySelector(".btn button")
let btnCircle = document.querySelector(".btn .btnCircle")
let myform = document.querySelector('.signup form')
const error = document.querySelector(".error")
myform.onsubmit= async function(e){
   e.preventDefault()
   try{
      let data = {}
      btn.style.display = "none"
      btnCircle.style.display = "grid"
      if (email.value && password.value && fname.value) {
         data.fullName = fname.value
         data.email = email.value
         data.mobileNumber = tel.value
         data.address = address.value
         data.gender = gender.value
         data.password = password.value
         const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         };
         const response = await fetch("https://jsminnastore.herokuapp.com/auth/signup", options)
         btn.style.display = "none"
         btnCircle.style.display = "grid"
         const jsonresp = await response.json()
         let interval;
         interval = setTimeout(() => {
            if (jsonresp.success) {
               let userIds = {
                  email: jsonresp.payload.email,
                  fullname: jsonresp.payload.fullName,
                  password: data.password,
                  token: jsonresp.payload.token
               }
               localStorage.setItem("user", JSON.stringify(userIds))
               self.location = "./login.html"
            } else {
               error.style.display = 'grid'
               error.innerHTML = `<div>
         <h1 class="close">X</h1>
         <p>This User has been registered. Kindly Enter new details</p>
         </div>`
               let close = document.querySelector(".close")
               close.onclick = function () {
                  error.style.display = 'none'
               }
               clearInterval(interval)
               interval = setTimeout(() => {
                  error.style.display = 'none'
               }, 10000)
            }
            btn.style.display = "block"
            btnCircle.style.display = "none"
         }, 1000)
      } else {
         error.style.display = 'grid'
         error.innerHTML = `<div>
         <h1 class="close">X</h1>
         <p>Kindly fill all <span>required *</span> fields</p>
      </div>`
         let close = document.querySelector(".close")
         close.onclick = function () {
            error.style.display = 'none'
            btn.style.display = "block"
            btnCircle.style.display = "none"
         }
         clearInterval(interval)
         interval = setTimeout(() => {
            error.style.display = 'none'
         }, 10000)
         btn.style.display = "block"
         btnCircle.style.display = "none"
      }
   }catch(e){

   }
}

document.addEventListener('DOMContentLoaded',function(){
   if(localStorage.getItem('uniqueEmil')){
      email.value= localStorage.getItem("uniqueEmil")
   }
})

