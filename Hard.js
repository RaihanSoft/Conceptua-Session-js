// const busPeople = 50
// const microPeople = 15
// const rishkaCost = 15

// borjatri 234 
// bus 4 = 200  remaing 34
// micto 2 = 30  remaing 4
// but 2 = 200  remaingtaka


function Goning(peoples){

    const busPeople = 50
    const microPeople = 15
    const rishkaCost = 15

    const remaingAfterBus = peoples % busPeople 

    const microAfterBus = remaingAfterBus % microPeople
    return microAfterBus * rishkaCost


}

console.log(Goning(234));