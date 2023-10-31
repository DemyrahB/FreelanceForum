const Name = class{
    constructor(name, occupation, qnty){
        this.name = name,
        this.occupation = occupation, 
        this.qnty = qnty
    }
}
const names = [
    new Name("Diane", "Social Worker", "$45"),
    new Name("Leah", "Medical Coder", "$55"),
    new Name("Jamie", "Author", "$25"),
    new Name("Mary", "Bookeeper", "$15"),
    new Name("Tia", "Producer", "$90")
]
const list = document.createElement("ul")
names.push(list)

const clearIntervalId = setInterval(() =>{
    if(names.length>0){
    const listItem = document.createElement ("li")
    listItem.textContent = names[0].name + " " + names[0].occupation + " " + names[0].qnty
    list.append(listItem)
    names.shift()
} else{
    clearInterval(clearIntervalId)
    }
}, 1000)