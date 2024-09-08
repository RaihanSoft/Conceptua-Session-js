const person1 = {
    name :"Raihan",
    honors : 10,
    hsc : 30,
    isFFfamily :true
}
const person2 = {
    name: "Siyaim",
    honors : 25,
    hsc : 32,
  
    isFFfamily :false
}


function jobSelection(info){

    if(typeof info !== "object"){
        return "invalid"
    }
    let totaMarks = info.honors + info.hsc

    if(info.isFFfamily){
        totaMarks = totaMarks + (totaMarks * 0.2)
    }
console.log(totaMarks);

    if(info.isFFfamily && totaMarks >= 80){
        return "Job Done"
    }else if(info.isFFfamily && totaMarks< 80){
        return "Failed next time"
    }else if(!info.isFFfamily && totaMarks >= 80){
        return "You got the job"
    }else if(!info.isFFfamily && totaMarks <80){
        return "Failed succesfully"
    }

//  if(totaMarks >= 80){
//     return "you got job"
//  }
//  else{
//     return "you failed"
//  }


}

console.log(jobSelection(person2));