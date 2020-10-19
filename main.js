// Your code below.

const makeDino = function(newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: newExtinct,
  }
}

const makeExtinct = function(dinosaur) {
  return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true)
}

const makeSingular = function(dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  }
}

const truncateSpecies = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  if (newDino.species.length >= 10) {
    newDino.species = newDino.species.slice(0, 7) + '...';
  }

  return newDino; 
}


// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  makeSingular,
  truncateSpecies,
}
