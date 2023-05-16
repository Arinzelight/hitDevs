 /*============ Assignment No1 ============= */

output = document.getElementById("result")

const simpleInterest =(P, T, R)=>{
    result = P * T * R / 100; 
    output.innerHTML = `Your Simple Interest on N${P} for ${T}years at ${R}% rate is N${result}`

}
    simpleInterest(25000,4,5)


/*============ Assignment No2 ============= */

output2 = document.getElementById("result2")


const welcomeStatement = ()=>{
    const userDetails = {
        name: "Arinze",
        Gender: 'male',
        Weight: 65,
        Height: 5.5,
    };
    
    function bodyMassIndex(){
        const weight = userDetails.Weight
        const height = userDetails.Height
        const BMI = weight/height
        return BMI.toFixed(1)
    }
    
    if(userDetails.Gender ==='male'){
     output2.innerHTML = `Hi ${userDetails.name} your favourite color is Blue and your BMI is ${bodyMassIndex()}ft/m`
    }else if(userDetails.Gender === 'female'){
        output2.innerHTML = `Hi ${userDetails.name} your favourite color is Pink and your BMI is ${bodyMassIndex()}ft/m`
    }
    
}

welcomeStatement()





