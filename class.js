// class Teacher {
//     constructor(name,subject){
//         this.name = name;
//         this.subject = subject;
//     }
// }


// const t1 = new Teacher('Imran','ICT');
// const t2 = new Teacher('Munira','English');

// console.log(t1);
// console.log(t2);


// class Friend{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const f1 = new Friend('Imran',24);
// const f2 = new Friend('Munira',24);

// console.log(f1);
// console.log(f2);


// class Picnic extends Friend {
//     constructor(name,age,cost){
//         super(name,age)
//         this.cost = cost;
//     }
// }

// const p1 = new Picnic('RIfad',12,1000);
// const p2 = new Picnic('Imran',24,1000);
// const p3 = new Picnic('Munira',24,1000);

// console.log(p1);
// console.log(p2);
// console.log(p3);




class Bus{
    constructor(busName,color,price){
        this.busName = busName;
        this.color = color;
        this.price = price;
    }
}

class BusOwner extends Bus {

    constructor(busName,color,price,ownerName,address){
        super(busName,color,price)
        this.ownerName = ownerName;
        this.address = address;
    }
}


const owner = new BusOwner('Sakura','Blue-Violet',6000000,'Mr. Alaam','Basundhara, block-B, house number: 13/A');

console.log(owner)
