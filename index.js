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


const persons = ['rakib','jakib','habib','nadib','kadib','radib'];

console.log(persons.sort());

// Ascending ------> smaller to larger: []

// Descending ------> larger to smaller: []


const newFuncion=(value)=> {
    console.log(value)
}

newFuncion(true)


//Objective: write a function to give me the sum of all numbers in an array


// let sum = 0;
// const problem = (data)=> {
//     for(let i= 0; i<data.length; i++){
//          sum = sum + data[i];
//     }
//     console.log(sum)
// }


// problem([10,20,30,40])


const evenNumber = []

const problem = (data)=> {
    for(let i=0; i<data.length; i++){
        if(data[i] % 2 === 0){
           evenNumber.push(data[i])
        }
    }
    return evenNumber;

}



returnValue = problem([10,20,30,43]);


console.log(returnValue)