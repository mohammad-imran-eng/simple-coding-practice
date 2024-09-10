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


const result = calculateTax(1000,2000);
console.log(result)