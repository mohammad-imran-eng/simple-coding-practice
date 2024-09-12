// first problem solve


function calculateTax(income, expenses) {
   
    const tax = (income - expenses) * .20

    if(income && expenses < 0){
        return "Invalid Input"
    }
    else if(income < expenses ){
        return "Invalid Input"
    }

    return tax;

}






// second problem solve

function sendNotification(email) {
   let result = email.split("@",1)
   let resultTwo = email.split("@");
   let firstName = result.toString()
   if(!email.includes('@')){
        return "Invalid Email";
   }
   else if(email.includes("@")){
    return firstName + " sent you an email from  " + resultTwo[1].toString()
   }
   
}



// Third problem solve


function checkDigitsInName(name) {
   if(typeof name !== 'string'){
        return 'Invalid Input';
   }
    

        const namePart = name.split("")
        for(let i =0; i<namePart.length; i++){
            if(!isNaN(namePart[i])){
                return true;
            }
        }
        
        return false;
   
}





// Fourth problem solve

function calculateFinalScore(obj) {

    let totalScore = obj.testScore + obj.schoolGrade;
   
   if(obj.isFFamily){
    totalScore = totalScore + 20;

   }
    if(!obj.isFFamily){
    totalScore = totalScore;
    
   }

   if(typeof obj !== 'object'){
    return "Invalid Input"
   }


    if(totalScore >=80){
        return true
    }
    else {
        return false
    }
    


}


// Fifth problem solve

function  waitingTime(waitingTimes  , serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    

    let totalTime = 0;
    
   for(const value of waitingTimes){
        totalTime = totalTime + value
   }
   let averageTime = totalTime/waitingTimes.length;
   let finalAverageTime = Math.round(averageTime)

   let israterAgyVivaBakiAsy = serialNumber - waitingTimes.length - 1

   let israterTimeLagbe = israterAgyVivaBakiAsy * finalAverageTime;
   

   return israterTimeLagbe;
   
}





