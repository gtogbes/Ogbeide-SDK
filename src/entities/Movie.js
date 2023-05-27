class Movie {
  constructor(
    id,
    name,
    runtimeInMinutes,
    budgetInMillions,
    boxOfficeRevenueInMillions,
    academyAwardNominations,
    academyAwardWins,
    rottenTomatoesScore
  ) {
    this.id = id;
    this.name = name;
    this.runtimeInMinutes = runtimeInMinutes;
    this.budgetInMillions = budgetInMillions;
    this.boxOfficeRevenueInMillions = boxOfficeRevenueInMillions;
    this.academyAwardNominations = academyAwardNominations;
    this.academyAwardWins = academyAwardWins;
    this.rottenTomatoesScore = rottenTomatoesScore;
  }

  static fromObject(obj) {
    return new Movie(
      obj._id,
      obj.name,
      obj.runtimeInMinutes,
      obj.budgetInMillions,
      obj.boxOfficeRevenueInMillions,
      obj.academyAwardNominations,
      obj.academyAwardWins,
      obj.rottenTomatoesScore
    );
  }
}


module.exports = Movie;
