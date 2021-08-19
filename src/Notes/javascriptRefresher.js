//let and const
//let-- same as var(use only if the variable's value will change
//const-- same as var(use only if the variable's value will not change

//Arrow functions
// Pre  ES6

function myFunction(){
    console.log("old way")
}

//Arrow Function

const myFunciton2=()=>{
    console.log("ES6 way")
}

//Ex:

const printMyName = (name) => {
    console.log('Kelvon');
}

//You could also omit the parenthesis around (name) only if its the only value being passed through
//Ex:
const multiply = number =>{
    return multiply(2);
}
//also can be written like
const multiply2 = number => multiply(2);

//TODO:CLASSES (Blueprints for objects
//Ex: Person{name = 'Kelvon'; (Property)
//   call()=>{...} (Method)
//const myPerson = new Person() (usage)
//myPerson.call (constructor call)
//class Person extends Master(Inheritance)

//Ex

class Human{
    constructor() {
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super(); //need super keyword for inheritance
        this.name='Kelvon';
        this.gender='female'; //could change value in child class
    }
    printMyName(){
        console.log(this.name);
    }
}
const person= new Person();
person.printMyName();
person.printGender();

//TODO:Properties are like"variables attached to classes/objects"
// ES6 -- constructor(){
//     this.myproperty = 'value';
// }

//TODO:ES7
// myProperty = 'value';

// class Human{
//     gender = 'male';
//
//     printGender(){
//         console.log(this.gender);
//     }
// }
//
// class Person extends Human{
//
//         //need super keyword for inheritance
//         name='Kelvon';
//         gender='female'; //could change value in child class
//     }
//     printMyName = () => {
//         console.log(this.name);
//     }
// }
// const person= new Person();
// person.printMyName();
// person.printGender();

//SPREAD AND REST OPERATORS
// OPERATOR -> ...

//SPREAD    Used to split up array elements OR object properties
//          const newArray = [...oldArray,1,2]
//          const newObject = {...oldObject, newProp:5}

//REST      Used to merge a list of function arguments into an array
//          function sortArgs(...args){
//                  return args.sort()
//                  }

const numbers = [1,2,3];
const newNumbers = [...numbers,4];

// const person = {
//      name = 'kelvon'
// };

const newPerson = {
    ...person,
    age:24
}

const filter = (...args) => {
    return args.filter(el=>el === 1);
}

//Destructuring -- Easily extract array elements or object properties and store them in variables

//Array destructuring
// const numbers1 = [1,2,3];
// [num1,num2] = numbers1;

//Array review

const doubleNumArray = numbers1.map((num)=>{
  return  num*2;
})




