console.log("1.Third umpire revew requested")
let umpireDecision;
let screenel=document.getElementById("screen")
const TIMEOUT=10000
function getThirdUmpireResult()
{
	console.log("2. Third Umpire review started")
	console.log("3. third umpire is checking cameras")
	return new Promise((resolve,reject)=>
	{
		setTimeout( ()=> {
		resolve(umpireDecision="OUT")
		console.log(`4.Third umpire result is ${umpireDecision}`)
	},TIMEOUT);
	})
}
function displyThirdUmpireResult()
{
	console.log(`5. ready to show result in ground screen ${umpireDecision}`)
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(screenel.innerText=umpireDecision)

	},2000)
})
}
function passInfoToGroundUmpire(){
	console.log("6.hey ground umpire, please revert your decision")
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("sucess")

	},3000)
})
}
function showerror()
	{
		console.log("some error")
	}


async function initThridUmpireReview()
{
	
	await getThirdUmpireResult()
	await displyThirdUmpireResult()
	await passInfoToGroundUmpire()


}
initThridUmpireReview()