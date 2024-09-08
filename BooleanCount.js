const x = [3, 2, true , "hello", false, true, 34, {name:"Raihan"}]

function countBoolean(x){
if(Array.isArray(x) === false){
    return "invalid"
}
let count = 0
 for(let item of x){
    if(typeof item === "boolean"){
        count ++
    }
 }
 return count;

}

console.log(countBoolean(x));


