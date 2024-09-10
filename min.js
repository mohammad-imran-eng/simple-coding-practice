const prices = [1000,20000,30000,40000,50000,70000,90000];

const getMin=()=> {
    let min = prices[0]
    for(price of prices){
        if(price > min){
            min = price
        }
    }
    return min
}


const result = getMin()
console.log(result)