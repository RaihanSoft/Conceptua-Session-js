// Raihan@dhaka.com

// const person = "Raihan"

const person = {
    name:"Siyam",
    address:"Savar"
}

function show(info){
    if(typeof info !== "object" || Array.isArray(info)===true){
        return "Provite a valid object"
    }
    const result = info.name+"@"+info.address+".com"
    return result;


}

console.log(show(person));