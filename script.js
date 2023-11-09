//html elements
const averagePriceSpan = document.getElementById("price")
const table = document.getElementById("table")
let averagePrice = 0
let peopleWhoHaveBeenAdded = 0

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const addFreelancer = (freelancer)=>{
    const tableRow = document.createElement("tr")
    const freelancerName = document.createElement("td")
    freelancerName.textContent = freelancer.name
    const occupation = document.createElement("td")
    occupation.textContent = freelancer.occupation
    const price = document.createElement("td")
    price.textContent = freelancer.price
    tableRow.append(freelancerName, occupation, price)
    table.append(tableRow)
    peopleWhoHaveBeenAdded++
    averagePriceSpan.textContent = Math.floor((averagePrice + freelancer.price)/peopleWhoHaveBeenAdded)
    averagePrice = averagePrice + freelancer.price/peopleWhoHaveBeenAdded
}

setInterval(()=>{
    if(peopleWhoHaveBeenAdded <8){
        addFreelancer(freelancers[peopleWhoHaveBeenAdded])
    }
},500)