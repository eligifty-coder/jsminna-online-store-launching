const email = document.querySelector(".email input")
const password = document.querySelector(".password input")
const error = document.querySelector(".error")
const btn= document.querySelector(".login form .input button")
const btnCircle= document.querySelector(".login form .input .btnCircle")
let interval;
document.addEventListener("DOMContentLoaded",function(){
   let userdata = JSON.parse(localStorage.getItem("user"))
   email.value= userdata.email
   password.value= userdata.password
})
const loginForm = document.querySelector('.login form')
loginForm.onsubmit = async function (e){
   e.preventDefault()
   let data={}
   const user = JSON.parse(localStorage.getItem("user"))
   const userEmail = user.email
   const userpassword= user.password
   console.log(userEmail, email.value)
   btn.style.display = "none"
   btnCircle.style.display = "grid"
   if (userEmail==email.value && userpassword==password.value){
      // btn.style.display = "none"
      // btnCircle.style.display = "grid"
      let userdata = JSON.parse(localStorage.getItem("user"))
      data.email=userdata.email
      data.password=userdata.password
      console.log(data)
      const options = {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      }
      const response = await fetch("https://jsminnastore.herokuapp.com/auth/login/", options)
      const jsonresp = await response.json()
      interval= setTimeout(function(){
         if (jsonresp.success) {
            console.log(jsonresp)
            self.location = "./profile.html"
         } else {
            error.style.display = 'grid'
            error.innerHTML = `<div>
         <h1 class="close">X</h1>
         <p>User not found, kindly Sign up</p>
         </div>`
            let close = document.querySelector(".close")
            close.onclick = function () {
               error.style.display = 'none'
            }
            clearInterval(interval)
            interval = setTimeout(() => {
               error.style.display = 'none'
            }, 1000)
         }
         btn.style.display = "block"
         btnCircle.style.display = "none"
      },1000)
   }else{
      interval= setTimeout(()=>{
         error.style.display = 'grid'
         error.innerHTML = `<div>
         <h1 class="close">X</h1>
         <p>User not found, kindly Sign up</p>
         </div>`
         let close = document.querySelector(".close")
         close.onclick = function () {
            error.style.display = 'none'
         }
         clearInterval(interval)
         interval = setTimeout(() => {
            error.style.display = 'none'
         }, 7000)
         btn.style.display = "block"
         btnCircle.style.display = "none"
      },3000)
   }
}
