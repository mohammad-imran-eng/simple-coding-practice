


const woodQuantity = (chairQuantity,tableQuantity,bedQuantity)=> {

    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;

    const chairTotalWood = chairQuantity * chairWood;
    const tableTotalWood = tableQuantity * tableWood;
    const bedTotalWood = bedQuantity * bedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;

}

const result = woodQuantity(1,1,1)

console.log(result)