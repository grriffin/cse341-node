const person = {
  name: 'Max',
  age: 29,
  //rather than arrow function in function variable
  //just declare the function to avoid problems with 'this'
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

person.greet();

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map((h) => 'Hobby: ' + h));

// slice copies an array, parameters for taking only pieces
const copiedArray = hobbies.slice();

// spread operator
const hobbies2 = [...hobbies, 'New Hobby'];
console.log(hobbies2);
// works for objects too
const copiedPerson = { ...person };
copiedPerson.greet();

// rest operator, same operator look but depends on context
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

// destructuring
const printName = ({ name }) => {
  console.log(name);
};

printName(person);

// must have the same name as properties on the object
const { name, age } = person;

console.log(name, age);

//works with arrays too, they are pulled by position
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
