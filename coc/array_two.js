const marvelHeroes = ['thor', 'ironman', 'hulk', 'captain america'];
const dcHeroes = ['batman', 'superman', 'wonder'];

// marvelHeroes.push(dcHeroes);
// const heros = marvelHeroes.concat(dcHeroes);
const allHeroes = [...marvelHeroes, ...dcHeroes];

// console.log(marvelHeroes);
// console.log(heros);
console.log(allHeroes);
// console.log(marvelHeroes[4][1]);

const array_inside_array = [ 1,2, [3,4,5], 6, [7, 8, [11,10]] ];

const flatArray = array_inside_array.flat(2);
console.log(flatArray);

console.log(Array.isArray('hello')); 
console.log(Array.from('hello')); 
console.log(Array.from({name : 'darshan'})); // interesting usecase

let score1 = 100
let score2 = 200
let score3 = 300

const scores = Array.of(score1, score2, score3);
console.log(scores);