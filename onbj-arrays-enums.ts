// const person: {
//     name: string;
//     age: number
// }
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string]
// } ={
//     name:'Maximilian',
//     age: 30,
//     hobbies:['sports', 'cooking'],
//     role:[2, "author"]
// }


// const ADMIN= 0
// const READ_ONLY= 1
// const AUTHOR =2

enum Role {ADMIN=5, READ_ONLY, AUTHOR};


const person ={
    name:'Maximilian',
    age: 30,
    hobbies:['sports', 'cooking'],
    role:Role.ADMIN
}
// person.role.push('admin')
// person.role[1]=10

let favoriteActivities: string[]
favoriteActivities=['sports'] 
console.log(person.name)

for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase())
}

if(person.role === Role.ADMIN){
    console.log('is admin')
}