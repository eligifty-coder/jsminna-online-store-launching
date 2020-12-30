
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
const anchor = document.querySelector(".content-sec .check a")
const form = document.querySelector(".form")
const btn= document.querySelector(".homeBtn button")
const btnCircle= document.querySelector(".homeBtn .circle")
para.innerHTML= new Date().getFullYear()
const timecontainer = document.querySelector(".time")

anchor.onclick= function(e){
	e.preventDefault()
	let token =JSON.parse(localStorage.getItem("user")).token
	if(token){
		self.location = "./suggested.html"
	}
}
form.onsubmit= function(e){
	e.preventDefault()
	btn.style.display = "none"
	btnCircle.style.display = "grid"
	if(emailInput.value){
		localStorage.setItem('uniqueEmil', emailInput.value)
		setTimeout(()=>{
			btn.style.display = "block"
			btnCircle.style.display = "none"
			self.location="./signup.html"
		},10000)
	}else{
		alert("kindly fill appropriately to continue")
	}
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
