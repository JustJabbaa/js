
let person = {
    name: "tomek",
    age:30
};

person.name = "Maciek";
let imie = 'name';
person[imie] = 'Mateusz'

console.log(person);

let selectedColors = ['red','blue'];
console.log(selectedColors);
selectedColors[2] = 'green'
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Tomasz');

function square(number) {
    return number * number;
}
console.log(square(6))
let number = square(2)
console.log(number)