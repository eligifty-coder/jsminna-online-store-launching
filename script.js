// const data ={
// 	fullName:"Gift",
// 	email:"chim@gmail.com",
// 	mobileNumber:"07068379301",
// 	address:"n0 66, Ajah, Lagos",
// 	gender:"female",
// 	password:"1234567"
// }
// console.log(data)
// const options = {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(data),
// };
// const myfun = async ()=>{
// 	const response = await fetch("https://jsminnastore.herokuapp.com/auth/signup", options)
// 	const jsonresp= await response.json()
// 	console.log(jsonresp)
// }
// myfun()
const timer = {
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
	mm:3,
}
const para = document.querySelector('.para .dated')
const daysPara = document.querySelector(".first .inputted")
const hourPara = document.querySelector(".second .inputted")
const minutePara = document.querySelector(".third .inputted")
const secondPara = document.querySelector(".fourth .inputted")
const emailInput = document.querySelector(".formdiv .email")
const form = document.querySelector(".form")
const btn= document.querySelector(".homeBtn button")
const btnCircle= document.querySelector(".homeBtn .circle")
console.log(btn)
para.innerHTML= new Date().getFullYear()
const timecontainer = document.querySelector(".time")
form.onsubmit= function(e){
	e.preventDefault()
	if(emailInput.value){
		localStorage.setItem('uniqueEmil', emailInput.value)
		btn.style.display="none"
		btnCircle.style.display="grid"
		setTimeout(()=>{
			btn.style.display = "block"
			btnCircle.style.display = "none"
			self.location="./signup.html"
		},1000)
	}else{
		alert("kindly fill appropriately to continue")
	}
	console.log(localStorage)
}
document.addEventListener('DOMContentLoaded', timeInterval)
function currentTimed(){
	currentDate = new Date().getTime()
	return currentDate
}
function timeInterval(){
	const startDate = new Date("Dec, 18,2021").getTime()
	const endTime = startDate - currentTimed()
	const seconds = Math.floor((endTime / 1000) % 60)
	const minutes = Math.floor((endTime / (1000 * 60)) % 60)
	const hours = Math.floor((endTime / (1000 * 60 * 60)) % 24)
	const days = Math.floor((endTime / (1000 * 60 * 60 * 24)))
	timer.days = days
	timer.hours = hours
	timer.minutes = minutes
	timer.seconds = seconds
	daysPara.innerHTML=days
	hourPara.innerHTML=hours
	minutePara.innerHTML=minutes
	secondPara.innerHTML=seconds
	setTimeout(timeInterval,1000)
}
