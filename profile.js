const avatarname = document.querySelector(".profile header span")
const titleName = document.querySelector("form .title span")
document.addEventListener('DOMContentLoaded', initFun)
const named = document.querySelector('.name input')
const description = document.querySelector(".description textarea")
const category = document.querySelector(".category select")
const suggestion = document.querySelector(".suggestion textarea")
const myForm = document.querySelector('form')
let btn = document.querySelector(".btn button")
let btnCircle = document.querySelector(".btn .btnCircle")
let interval
const error = document.querySelector(".error")
function initFun() {
   let token;
   if (localStorage.getItem("user")) {
      let storageName = JSON.parse(localStorage.getItem('user')).fullname.split(" ")
      token = JSON.parse(localStorage.getItem('user')).token
      avatarname.innerHTML = storageName[0]
      titleName.innerHTML = storageName[0]
   }
   myForm.onsubmit = submitSuggestion
   async function submitSuggestion(e) {
      console.log(token)
      e.preventDefault()
      try {
         btn.style.display = "none"
         btnCircle.style.display = "grid"
         if (named.value && description.value && category.value && suggestion.value) {
            let data = {
               itemName: named.value,
               itemDescription: description.value,
               itemCategory: category.value,
               reason: suggestion.value
            }
            const options = {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${token}`
               },
               body: JSON.stringify(data),
            };
            const response = await fetch("https://jsminnastore.herokuapp.com/suggest", options)
            const jsonresp = await response.json()
            
            interval = setTimeout(() => {
               if (jsonresp.success) {
                  btn.style.display = "none"
                  btnCircle.style.display = "grid"
                  self.location = "./suggested.html"
               }
               else {
            clearInterval(interval)
            interval = setTimeout(() => {
               error.style.display = 'grid'
               error.innerHTML = `<div>
               <h1 class="close">X</h1>
               <p>Ensure you fill correctly</p>
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
            }, 3000)
         }
            }, 10000)
         } else {
            clearInterval(interval)
            interval = setTimeout(() => {
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
            }, 3000)
         }
      } catch (e) {
         console.log(e.message)
      }
   }
}