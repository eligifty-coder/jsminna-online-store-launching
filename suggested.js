const header = document.querySelector(".itemHeader")
const subheader = document.querySelector(".subheader h1 span")
const content = document.querySelector(".outer .display .content-sec")
const suggestion = document.querySelector(".suggestion form .category")
console.log(localStorage.getItem('error'))
document.addEventListener("DOMContentLoaded", function(){
   let token;
   if(localStorage.user){
      token = JSON.parse(localStorage.user).token
   }
   let api ="https://jsminnastore.herokuapp.com/suggested"
   fetchApi(api)
   suggestion.onchange = function (e) {
      let changedApi = `https://jsminnastore.herokuapp.com/suggested/${e.target.value}`
      fetchApi(changedApi)
   }
   async function fetchApi(api) {
      try{
         const options = {
            method: "GET",
            headers: {
               authorization: `Bearer ${token}`
            },
         };
         const data = await fetch(api, options)
         const jsonData = await data.json()
         let html="";
         if(jsonData.success){
            header.style.display="grid"
            content.style.borderBottom="1px solid #ccc;"
            let suggestedItem= jsonData.payload.result
            subheader.innerHTML = `(${suggestedItem.length})`
            suggestedItem.forEach((item, index)=>{
               html+=`<div class="content" data-id=${item._id}>
               <p>${index}</p>
               <p> ${item.itemName}</p>
               <p>${item.itemDescription}</p>
               <p>${item.itemName}</p>
               <p>${item.reason}</p>
               </div>`
            })
            content.innerHTML=html
         }
      }catch(e){
         console.log(e)
         // self.location= './login.html'
      }
   }
})
