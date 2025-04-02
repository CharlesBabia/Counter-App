// //document.getElementById("count-el").innerText = 5
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")


console.log(saveEL)
let count = 0
let negative = "Number of People Entered Cannot Be Negative"


 function Increment(){
     count += 1
    countEL.innerText = count
}

 function Decrement(){
    if (count != 0){
    count -= 1
    countEL.innerText = count
    }else{
    countEL.innerText = negative
    }
 }

 function Reset(){
    count -= count
    countEL.innerText = count
 }

function Save(){
    let countStr = " " + count + " - "
    
    saveEL.innerText += countStr

 }





