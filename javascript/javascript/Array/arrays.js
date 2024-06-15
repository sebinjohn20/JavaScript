//Arrays
const channelTopics=["html","css","JavaScript"]
console.log(channelTopics.length)
//Get value from array
console.log(channelTopics[1])
//Edit item
channelTopics[0]="HTML"
console.log(channelTopics)
//Delete item
// delete channelTopics[0]



//push && unshift

channelTopics.push("React Js")
channelTopics.unshift("angular")
console.log(channelTopics)
//pop && shift.....>
// channelTopics.pop()
// channelTopics.shift()
//splice & slice
// const splicearray=channelTopics.splice(2,2)
// console.log(channelTopics)
// console.log("spliceArray",splicearray)
const sliceArray=channelTopics.slice(1,3)
console.log("sliceArray",sliceArray)
//array Iteartion
// for(let topic in channelTopics){
// 	console.log(channelTopics[topic])

// }
// channelTopics.forEach(function(topic){
// 	console.log(topic)
// })
channelTopics.map((topic)=>{
	console.log(topic)
})
//destructuring operation
const channelData=["web Diart",3,2020]
const [name,age,year]=channelData
console.log(year)
const firstArr=[1,2,3]
const secondArr=[4,5,6]
fullArr=[...firstArr,...secondArr]
console.log(fullArr)