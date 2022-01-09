const name = 'Max';
// might change age
let age = 29;
const hasHobbies = true;

// anonymous function
const summarizeUser = function (userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// arrow function
// big difference is the "this" keyword behaves differently
// arrow function "this" is global scope ?????
const summarizeUser2 = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies: ' +
    userHasHobby
  );
};

// even shorter syntax, no return or braces when function is a single statement
const summarizeUser3 = (userName, userAge, userHasHobby) =>
  'Name is ' +
  userName +
  ', age is ' +
  userAge +
  ' and the user has hobbies: ' +
  userHasHobby;

console.log(summarizeUser3(name, age, hasHobbies));
