// const number = [1,2,3,4,5,6,7,8,9];

// console.log(number)

// number[0] = 100;


// console.log(number);


// arry is mutable
// string is immutable


// const add = 'I am a student of web app development.'

//     console.log(add);

//   const newAdd = add.split(',')

//   console.log(newAdd);

//   const first = 'Abid';
//   const last = 'Islam'

//   const fullName = first.concat(' ').concat(last)

//   console.log(fullName)


// const sentence = 'developer';
 
// // let reverse = ''

// for (const letter of sentence){
//   console.log(letter)
//   // ved
//   reverse = letter + reverse;
// }

// console.log(reverse)


// const sentence = 'developer';
 
// let reverse = ''


// for (let i = 0; i<sentence.length; i++){
//   console.log(sentence[i])
//   const letter = sentence[i]
//   reverse = letter + reverse
// }

// console.log(reverse)


// //shortcut 

// const rev = sentence.split('').reverse().join('')

// console.log(rev)

// const mobile = {
//   brand: 'samsung',
//   price: '212222',
//   color: 'black',
//   camera: '12MP'
// }

// for (const prop in mobile){
//   console.log(mobile[prop])
// }


// const persons = ['rakib','jakib','habib','nadib','kadib','radib'];

// console.log(persons.sort());

// Ascending ------> smaller to larger: []

// Descending ------> larger to smaller: []


// const newFuncion=(value)=> {
//     console.log(value)
// }

// newFuncion(true)




//Objective: write a function to give me the sum of all numbers in an array


// let sum = 0;
// const problem = (data)=> {
//     for(let i= 0; i<data.length; i++){
//          sum = sum + data[i];
//     }
//     console.log(sum)
// }


// problem([10,20,30,40])


// const evenNumber = []

// const problem = (data)=> {
//     for(let i=0; i<data.length; i++){
//         if(data[i] % 2 === 0){
//            evenNumber.push(data[i])
//         }
//     }
//     return evenNumber;

// }



// returnValue = problem([10,20,30,43]);


// console.log(returnValue)



// how to remove unique value an array

// const friends = ['abdullah','abdullah','imran','robiul','radib'];

// let newFriend = [];
// const removeDouble = ()=> {
//     for(const friend of friends){
//         if(!newFriend.includes(friend)){
//             newFriend.push(friend)
//         }
//     }
//     return newFriend;
// }


// const result = removeDouble()

// console.log(result)


// const day = Date();

// console.log(day)


// //Write a function to convert temperature celcius to farenheit


// let f = 0;

// const convert = (c)=> {
//     f = (c*1.8) + 32
//     return f;
// }

// const result = convert(40)
// console.log(result)


// You are given an array of numbers. Count how many times the a number is repeated in the array.

// const numbers = [1,1,2,2,3,4,5,6,7,8,9,9]
// const newArray = []
// let sum = 0;

// const repeated =()=> {

//    for(number of numbers){
//     if(!newArray.includes(number)){
//         newArray.push(number)
//     }
//     else {
//          sum = sum + 1
//     }
//    }

//    return sum;
   
    
// }


//  const result = repeated();

//  console.log(result)



// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
//  }, 100);
// }


// check 3 value what is the bigger

// const bigger = (one,two,three)=> {
//     if(one > two && one > three){
//         console.log(one)
//     }
//     else if(two > one && two > three){
//         console.log(two)
//     }
//     else {
//         console.log(three)
//     }
// }

// bigger(1,2,3)
// bigger(10,20,30)



// what are the biggest number of array

const numbers = [10,20,30,40,50,60]

const getMax =()=> {
    let max = numbers[0]
    for(const number of numbers){
        if(number > max){
            max = number
        }
    }
    return max
}


const result = getMax()
console.log(result)