console.log("1.Third umpire revew requested")
let umpireDecision;
let screenel=document.getElementById("screen")
const TIMEOUT=10000
function getThirdUmpireResult(callback)
{
	console.log("2. Third Umpire review started")
	console.log("3. third umpire is checking cameras")
	return setTimeout( ()=> {
		umpireDecision="OUT"
		console.log(`4.Third umpire result is ${umpireDecision}`)
		callback()
	},TIMEOUT)
}
function displyThirdUmpireResult(callback)
{
	console.log(`5. ready to show result in ground screen ${umpireDecision}`)
	screenel.innerText=umpireDecision
	callback()
}
function passInfoToGroundUmpire(){
	console.log("6.hey ground umpire, please revert your decision")
}
getThirdUmpireResult(function(){
	displyThirdUmpireResult(function(){//callback hell
		passInfoToGroundUmpire()
	})
})

console.log("6. Third umpire review process finished")
