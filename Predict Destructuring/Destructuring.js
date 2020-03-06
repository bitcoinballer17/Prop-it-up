const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
Tesla
console.log(otherRandomCar)
Mercedes


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// ReferenceError: name is not defined
// //Predict the output
// console.log(name);
// Undefined
// console.log(otherName);
// Elon

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// Undefined
// const password = '12345';
// undefined
// const { password: hashedPassword } = person; 
// Undefined 
// //Predict the output
// console.log(password);
   12345 
// console.log(hashedPassword);
// Undefined

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// undefined
// const [,first] = numbers;
// undefined
// const [,,,second] = numbers;
// undefined
// const [,,,,,,,,third] = numbers;
// undefined
// //Predict the output
// console.log(first == second);
   False
// console.log(first == third);
   True 

   const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
value
console.log(secondKey);
[1,5,1,8,3,3]
console.log(secondKey[0]);
1
console.log(willThisWork);
5








