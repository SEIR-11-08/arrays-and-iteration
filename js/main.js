const nums = [1, 2, 3, 4, 5];
const names = ['john', 'steve', 'Angela', 'Sherry', 'Mark']


const firstValue = nums[0];
const lastValue = nums[4];
const middleValue = nums[2];

// // console.log(names.length)
// // console.log(names[names.length - 1]);

// Change/Reasign Values
names[2] = 'Johnathan';

// Adding New Value
names.push('Jessica');

// Remove Value from end of array
const lastNameRemoved = names.pop();
// Remove Value from end of array
const firstRemovedName = names.shift();


// console.log(lastNameRemoved);


const favFoods = [
  'Pizza',
  'Spaghetti',
  'Steak',
  'Tacos'
];

// for (let i = 0; i <= favFoods.length - 1; i++) {
//   if (favFoods[i] === 'Steak') {
//     console.log('Steak is a fav food');
//   }
// }


for (let i = 0; i <= favFoods.length - 1; i++) {
  if (i % 2 === 0) {
    console.log(favFoods[i]);
  }
}
  
