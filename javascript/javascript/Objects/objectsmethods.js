const cskdetails={

    Teamname:"CSK",
    no_of_players: 20,
    captain:"M S Dhoni",
    Vice_Captain:"Jadja"
}
//add key value pair to an object
cskdetails.no_of_tittle=5
cskdetails.years=[2008,2013,2017,2021,2023]
console.log(cskdetails.Teamname)
console.log(cskdetails)
console.log(cskdetails.years)
console.log(cskdetails.years[0])
//modify objects
cskdetails.no_of_players=25
//delete objects properties
delete cskdetails.Vice_Captain
const isAnyAward="no awards recieved"
cskdetails[isAnyAward]="no"
console.log(cskdetails)