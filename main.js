// let formatted = true; if(formatted) {console.log('The code is easy to read');}
// let formatted = true;

// let formatted = true; if(formatted) {alert('The code is easy to read');}
// let formatted = true;

//  if(formatted) {
//     console.log('The code is easy to read');
// }

// let formatted = true;

// if(formatted) {
//     alert('The code is easy to read');
// }

// let message = "Welcome to JavaScript";
// console.log(message);

// let counter = 120;
// console.log(typeof(counter)); // "number"

// counter = false;
// console.log(typeof(counter)); // "boolean"

// counter = "Hi";
// console.log(typeof(counter)); // "string"

// let message = 'I\'m also a valid string'; // use \ to escape the single quote (')

// let str = 'JavaScript';
// str = str + ' String';

// let s = 'Javascript';
// s[0] = 'j';
// console.log(s);

// let s = 'Javascript';
// let result = s.toLowerCase();
// alert(result); // This will output 'javascript'

// let s = 'Javascript';
// let charArray = s.split('');
// charArray[0] = charArray[0].toLowerCase();
// let result = charArray.join('');
// console.log(result); // This will output 'Javascript'

// let pageView = 9007199254740991n;
// console.log(typeof(pageView)); // 'bigint'

// let a = 051;
// console.log(a); // 41

// let b = 058;
// console.log(b);

// let e = parseInt('111',2);
// console.log(e); // 7 decimal to binary

// let f = 0b111;
// console.log(f); // 7 this is also  a binary number

// let name = 'John';
// let message = `Hi, I'm ${name}.`;
// console.log(message);

// let str = "Hey Baby How are you!";
// console.log(str.length);

// let str = "Hey, what are you doing";
// console.log(str[0]); ---first character from string

// let str = "Hey, what are you doing";
// console.log(str[str.length -1]); ---last character from string


// age = prompt("Enter your Age: ");
// let message;

// if (age >= 16 && age <= 60 ) {
//   message = 'You can drive.';

// }
// else {
//   message = 'You cannot drive.';
// }
// console.log(message);



//JavaScript Crush Course

// console.log('Hello World');
// console.error('This is an error!');
// console.warn('This is an Warning!');


// const person = {
//     firstName : 'Pritam',
//     lastName : 'Mondal',
//     age : 23,
//     hobbies: ['Movies', 'Blogging', 'SEO', 'Content Writing', 'Coding'],
//     address: {
//         street: 'Basirhst, Nowapara',
//         city: 'Basirhat, Kolkata',
//         pin: 743412,
//         state: 'West Bengal',
//         country: 'India'
//     }
// }

// console.log(person.hobbies[0]);
// console.log(person.address.city);

// person.email = 'mpritam499@gmail.com'

// const {firstName, lastName, address:{city}} = person;
// console.log(city);
// alert(city);

// console.log(person);
// alert(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out Trash',
//         isCompleted: true
//     },
//      {
//         id: 2,
//         text: 'Meeting with Boss',
//         isCompleted: true
//     },
//      {
//         id: 3,
//         text: 'Dentist meeting',
//         isCompleted: false
//     }

// ];

// console.log(todos[1].text);

// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

// for(let i=0; i<todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text)
// }

//forEach, map, filter

//ForEach
// todos.forEach(function(todo){
// console.log(todo.text);
// });

//map
// const todoText = todos.map(function(todo) {
// return todo.text;
// });

// console.log(todoText);


//filter
// const todoCompleted = todos.filter(function(todo) {
// return todo.isCompleted === true;
// });

// console.log(todoCompleted);


//filter & map
// const todoCompleted = todos.filter(function(todo) {
// return todo.isCompleted === true;
// }).map(function(todo){
//    return todo.text;
// })

// console.log(todoCompleted);


// const x = 10;

// if(x === 10){
//     console.log('x is 10');

// } else if(x>10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }


//function
// function addNums(num1 = 1, num2 = 1){
//     return num1 + num2;
// }

// console.log(addNums(5,5));

//arrow function
// const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);

// addNums(5,5);

// OOPs

//constructor
// function Person(fastName, lastName, dob){
//   this.fastName = fastName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function(){
//     return this.dob.getFullYear();
//   }
//   this.GetFullName = function(){
//     return `${this.fastName} ${this.lastName}`
//   }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return  `${this.fastName} ${this.lastName}`;
// }

// class Person {
//    constructor(fastName, lastName, dob){
//         this.fastName = fastName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
// }

// getBirthYear(){
//     return this.dob.getFullYear();
// }

// getFullName(){
//     return  `${this.fastName} ${this.lastName}`;

// }
// }

//instantiate obs
// const person1 = new Person('Pritam', 'Mondal', '07-16-2000');
// const person2 = new Person('Anuprova', 'Das', '11-06-1999');
// const person3 = new Person('James', 'Bond', '07-07-1985');

// console.log(person1.dob);
// console.log(person1.dob.getFullYear());
// console.log(person2.dob);
// console.log(person3.fastName);

// console.log(person1.GetFullName());
// console.log(person1.getBirthYear());

// console.log(person3.getFullName());
// console.log(person1);


//DOM
// console.log(window);
// alert(1);

//single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('.item'));
// console.log(document.getElementsByTagName('.item'));

//Remove list
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';



// const btn = document.querySelector('.btn');
// btn.style.background =  'purple';

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const Msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        Msg.classList.add('error');
        Msg.innerHTML = '⚠️Please Enter All Fields';

        setTimeout(() => Msg.remove(), 3500);
    }else{
        // console.log('sucess');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}