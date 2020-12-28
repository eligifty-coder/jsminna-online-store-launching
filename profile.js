const avatarname = document.querySelector(".profile header span")
const titleName = document.querySelector("form .title span")
console.log(avatarname, titleName)
document.addEventListener('DOMContentLoaded', initFun)
const named = document.querySelector('.name input')
const description = document.querySelector(".description textarea")
const category = document.querySelector(".category select")
const suggestion = document.querySelector(".suggestion textarea")
const myForm = document.querySelector('form')
let btn = document.querySelector(".btn button")
let btnCircle = document.querySelector(".btn .btnCircle")
const error = document.querySelector(".error")
function initFun(){
   if(localStorage.getItem("user")){
      let storageName = JSON.parse(localStorage.getItem('user')).fullname.split(" ")
      avatarname.innerHTML = storageName[0]
      titleName.innerHTML = storageName[0]
   }
   myForm.onsubmit= submitSuggestion
   async function submitSuggestion(e){
      e.preventDefault()
      try{
         let data = {
            "itemName": "televison809",
            "itemDescription": "42 inches television set",
            "itemCategory": "electronics",
            "reason": "For watching football"
         }
         const options = {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         };
         const response = await fetch("https://jsminnastore.herokuapp.com/suggest", options)
         const jsonresp = await response.json()
         console.log(jsonresp)
      }catch(e){}
   }
}