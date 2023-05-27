const { LordOfTheRings } = require("./services");

const lor = new LordOfTheRings("fUqHRG89YYups0xIQpMp");

lor.movies
  .getAll()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// lor.movies.getMovieQuotes("5cd95395de30eff6ebccde5d").then(res => console.log(res)).catch(err => console.log(err))

// quotes.getAll().then(res => console.log(res)).catch(err => console.log(err))

// lor.quotes
//   .getById("5cd96e05de30eff6ebcce84c")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

module.exports = LordOfTheRings;
