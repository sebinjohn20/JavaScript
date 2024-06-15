const displayelement = document.getElementById('display_screen')

function displayumpiredescision(finaldesicion) {
	displayelement.innerText = finaldesicion.toUpperCase()
	return true
}
function showmyfavcricket() {
	console.log('my fav ms donhi')
}
showmyfavcricket()

function getthirdumpireDecision(descision) {
	let isdesicion = descision
	let desicion_result=isdesicion && displayumpiredescision(isdesicion)
	if(desicion_result)
	{
		setTimeout(()=>{
			displayelement.innerText=""
		},4000)
	}

}
getthirdumpireDecision('out') //Arguments
