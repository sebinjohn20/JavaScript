//callback fuction
let cameraAngleDecisions=[]
function processThridUmprieReview(groundumpireReqRecd,callbackFn)
{
    if(!groundumpireReqRecd) return
    groundumpireReqRecd && callbackFn()
	const[cameraAngle1Result,cameraAngle2Result]= cameraAngleDecisions //array destructing
	cameraAngle1Result?displayMessageInScreen("out") : displayMessageInScreen("Not out")
	if(cameraAngleDecisions.length>1)
	{
	cameraAngle1Result &&  cameraAngle2Result ? displayMessageInScreen("out") : displayMessageInScreen("Not out")
	}
}
function displayMessageInScreen(finalScreenDecision)
{
	const screenEl=document.getElementById("screen")
	screenEl.innerText=finalScreenDecision
}
function getThirdUmpireReponse()
{
	let decision=prompt("what is the desicion ")
	decision=decision.toLowerCase()==="out" ? true: false
	
	cameraAngleDecisions.push(decision)
	return decision

}

function checkCameraangle1()
{
	getThirdUmpireReponse()
}
function checkCameraangle2()
{
	getThirdUmpireReponse()
}
processThridUmprieReview(true,checkCameraangle1)
processThridUmprieReview(true,checkCameraangle2)

