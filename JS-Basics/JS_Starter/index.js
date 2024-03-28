//First JS Code
let name = "Utkarsh";
console.log(name);

const rate_change=3;
console.log(rate_change);

let age = 20;
let isStudent = true;
let person = {
    name: "Utkarsh",
    age: 20
};

//Dot notation
person.name="Sinha"

//Bracket Notation
person['name']="Raj"
console.log(person['name']);

//Arrays
let selectedColours = ['Red','Blue','Green','Yellow','Orange'];
console.log(selectedColours);
selectedColours[5]=21;
console.log(selectedColours);
console.log(selectedColours.length);

//Functions

function greet(name){
    let hour=10;
    if (hour>=6 && hour <12){
        console.log('Good Morning, '+name+'. Welcome to JavaScript!');
    }
    else if (hour>=12 && hour <18){
        console.log('Good Afternon, '+name+'. Welcome to JavaScript!');
    }
    else{
        console.log('Good Evening, '+name+'. Welcome to JavaScript!');
    }
}

greet("Utkarsh");

//For Loops:

for (let i=0;i<5;i++){
    console.log("Hello World!",i);
}