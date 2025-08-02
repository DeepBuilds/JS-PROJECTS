// console.log('Project JavaScript file loaded successfully!');
// console.log('this is my project');

// window.alert('Hello motherfucker!');
// let another = 'how are you';
/* 
I can write as 
much as i can using this
*/
document.getElementById("t2").textContent = 'ola there';
//"" we have to use this to define id.
let firstName = {
    name: 'Shriram',
    lastName: 'jadhawar',
    age: 19
};
let array = ['red', 'black', 'range'];
array[4] = 'blank';
console.log(array[1]);

function greet(name,lastName) // Here name is  parameter
{
    console.log('hello world' + name + ' ' + lastName);
}
// calculate the value 
function square(number) {
    return number * number; // Here number is parameter
}

// greet('john','smith'); 
console.log(square ( 40 )); // Here 40 is argument

// Here john is argument .Here the value of john
console.log(array[3])