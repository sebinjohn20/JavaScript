//object iterations
const cskdetails={

    Teamname:"CSK",
    no_of_players: 20,
    captain:"M S Dhoni",
    Vice_Captain:"Jadja"
}
console.log ("Teamname" in cskdetails)
for(let key in cskdetails)
{
	console.log(cskdetails[key])
}
//get only keys
console.log(Object.keys(cskdetails))
//get only values
console.log(Object.values(cskdetails))
//get key and values
console.log(Object.entries(cskdetails))
//Object referncing
let TeamNamecopy=cskdetails
console.log("Teamname",cskdetails)
console.log("Teamnamecopy",TeamNamecopy)
//copy object
let teamnamecopy=Object.assign(cskdetails)
console.log("cskdetails",cskdetails)
console.log("teamnamecopy",teamnamecopy)
//object freeze
let teamlogin={
	username:"csk",
	password: "csk5"
}
Object.freeze(teamlogin)
let channelloginhacked=Object.assign(teamlogin)
channelloginhacked.password="****"
console.log("teamlogin",teamlogin)
console.log("chaannel loginhacked",channelloginhacked)
// object with const
const cskdetail={

    Teamname:"CSK",
    no_of_players: 20,
    captain:"M S Dhoni",
    Vice_Captain:"Jadja"
}
cskdetail.no_of_players=25
console.log(cskdetail)
//Spread operation
const channelbasicInfo={
channelname:"webDiary",
age:3
}
const channelAdvansedInfo={

	isMontised:true,
	tweFactorAuth:true,
}
const aboutChannel={...channelbasicInfo,...channelAdvansedInfo}
console.log(aboutChannel)