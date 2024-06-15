//Arrow fuction
function getThirdUmpireDec1()
{
console.log(this)
}
const getThirdUmpireDec2=function(){
    console.log(this)
}
const getThirdUmpireDec3=()=>{
    console.log(this)
}
getThirdUmpireDec1()
getThirdUmpireDec2()
getThirdUmpireDec3()

