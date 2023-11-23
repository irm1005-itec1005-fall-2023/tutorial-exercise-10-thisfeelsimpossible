/* Tutorial Exercise 10
 *
 * In Step 01 we're going to be working
 * with some more advanced array concepts.
 *
 * Follow the instructions below
 *
 */

// Array of pokemon objects
// that we'll use for the exercise
const pokemons = [
  {
    id: 1, name: 'Pikachu', type: 'Electric', level: 35,
    abilities: ['Static', 'Lightning Rod']
  },
  {
    id: 2, name: 'Charizard', type: 'Fire', level: 50,
    abilities: ['Blaze', 'Solar Power']
  },
  {
    id: 3, name: 'Bulbasaur', type: 'Grass', level: 20,
    abilities: ['Overgrow', 'Chlorophyll', 'Run Away']
  },
  {
    id: 4, name: 'Squirtle', type: 'Water', level: 25,
    abilities: ['Torrent', 'Rain Dish']
  },
  {
    id: 5, name: 'Jigglypuff', type: 'Normal', level: 30,
    abilities: ['Cute Charm', 'Competitive']
  },
  {
    id: 6, name: 'Gengar', type: 'Ghost', level: 45,
    abilities: ['Cursed Body','Run Away']
  },
  {
    id: 7, name: 'Mewtwo', type: 'Psychic', level: 70,
    abilities: ['Pressure', 'Unnerve']
  },
  {
    id: 8, name: 'Eevee', type: 'Normal', level: 15,
    abilities: ['Run Away', 'Adaptability']
  },
  {
    id: 9, name: 'Snorlax', type: 'Normal', level: 50,
    abilities: ['Immunity', 'Thick Fat']
  },
  {
    id: 10, name: 'Lugia', type: 'Psychic', level: 70,
    abilities: ['Pressure', 'Multiscale']
  }
];


// 1. Display the Pokemons that have a level between 30 and 50
for (i = 0; i < pokemons.length; i++) {
if (pokemons[i].level >= 30 && pokemons[i].level <= 50) {
console.log(pokemons[i].name);
}
}



// 2. Display the pokemons that have an ability called "Run Away"
for (let i = 0; i < pokemons.length; i++) {
  for (let j = 0; j < pokemons[i].abilities.length; j++) {
    if (pokemons[i].abilities[j] === 'Run Away') {
      console.log(pokemons[i].name);
    }
  }
}

// 3. Display how many Pokemons have the type "Normal"

  let count = 0;

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type === 'Normal') {
      count++;
    }
  }
  console.log(count);


// 4. Display the names of all of pokemons that have a type of "Psychic"

for (let i = 0; i < pokemons.length; i++) {
  if (pokemons[i].type === 'Psychic') {
    console.log(pokemons[i].name);
 }
}

// 5. Display the types of Pokemon and the number of Pokemons that have that type
//   Example:
//   Psychic - 2,
//   Normal - 3, etc.

// Create an array of all the types
// eg: { type: 'Normal', count: 3 }

let types = []

for (let i = 0; i < pokemons.length; i++) {
  let type = pokemons[i].type;
  let typeYes = false;

  for (let j = 0; j < types.length; j++) {
    if (types[j].type === type) {
      typeYes = true;
      type[j].count++;
    }
  }

  if (!typeYes) {
    types.push({type: type, count: 1});
  }
}



// Display the results

for (let i = 0; i < types.length; i++) {
  console.log(`${types[i].type} - ${types[i].count}`);
}