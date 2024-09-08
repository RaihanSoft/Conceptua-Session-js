function calculateSavings (income){

    if(typeof income !== "number"){
        return "Invalid input"


    }

    const houseRent = 5000
    const mealCost = 3000
    const personal = 2000;
    const TotalExpeses = houseRent + mealCost + personal

    if(TotalExpeses >  income){
        return "earn more";
    }
    const seavings =  income - TotalExpeses
    return seavings
}

console.log(calculateSavings(27000));