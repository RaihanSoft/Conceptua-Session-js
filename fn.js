

function bigestNum(numbers){

    if(Array.isArray(numbers) === false){
        return "This is not an array"
    }


    let max = numbers[0]

    console.log("before", max);

    for(const item of numbers){
        if(item > max){
            max = item
        }


    }
    return max ;


}
const numbers = [5,76,8,3,9,5]
console.log(bigestNum(numbers));