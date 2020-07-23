const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct
  }
}

const makeSingular = function(dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return dinosaur;
  }
}

const truncateSpecies = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  newDino.species = newDino.species.length <= 10
    ? newDino.species
    : newDino.species.slice(0, 7) + '...';

  return newDino; 
}

const makeExtinct = function(dinosaur) {
  return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true)
}


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
