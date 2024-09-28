const friends = {
    name: 'rajib',
    age: 25,
    department: 'Computer',
    isTrue: true
}

// const result = Object.keys(friends);


// const result2 = Object.values(friends);
// console.log(result2);


// const result3 = Object.entries(friends);
// console.log(result3);

// console.log(delete friends.name);

console.log(friends);

const {name,... newF} = friends;

console.log(newF)

