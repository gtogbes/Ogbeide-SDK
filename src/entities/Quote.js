class Quote {
  constructor(id, dialog, movie, character) {
    this.id = id;
    this.dialog = dialog;
    this.movie = movie;
    this.character = character;
  }

  static fromObject(obj) {
    return new Quote(
      obj.id,
      obj.dialog,
      obj.movie,
      obj.character
    );
  }
}

module.exports = Quote;
