// You have an array of strings but some strings in that array are comma separated. Goal is to go through the array and break out the comma separated strings into their own elements of the main array and the original string (the one with the commas) is removed
// ['apple', 'orange', 'grape, pineapple'] turns into ['apple', 'orange', 'grape', 'pineapple']

const initialArray = ['apple', 'orange', 'grape, pineaple'];
const finalArray = initialArray.join(", ").split(", ");
console.log(finalArray);





