const { Movie, Quote } = require("../entities");

module.exports = (path, apiRequest) => {
  return {
    /**

      Retrieves a list of movies from the API.
      @param {Object} options - Options for retrieving movies.
      @param {number} options.limit - The maximum number of movies to retrieve. Default is 100.
      @param {number} options.page - The page number of the movie results. Default is 1.
      @param {number} options.offset - The offset for paginated results. Default is 0.
      @returns {Promise<Array<Movie>>} - A promise that resolves to an array of Movie objects.
      @throws {Error} - If the API request fails or returns an error status code.
    */
    async getAll({ limit = 100, page = 1, offset = 0 } = {}) {
      const result = await apiRequest.get({
        path,
        params: { limit, page, offset },
      });
      if (result.status !== 200) throw Error(result.data);
      const movies = result.data?.docs;
      if (movies && Array.isArray(movies))
        return movies.map((movie) => Movie.fromObject(movie));
      return [];
    },

    /**

    Retrieves a movie by its ID from the API.
    @param {string} id - The ID of the movie to retrieve.
    @returns {Promise<Movie|null>} - A promise that resolves to a Movie object if found, or null if not found.
    @throws {Error} - If the API request fails or returns an error status code.
    */
    async getById(id) {
      const result = await apiRequest.get({ path: `${path}/${id}` });
      if (result.status !== 200) throw Error(result.data);
      const movie = result.data?.docs[0];
      if (!movie) return null;
      return Movie.fromObject(movie);
    },

    /**

      Retrieves a list of quotes by its movie ID from the API.
      @param {string} id - The ID of the movie to retrieve the quote from.
      @returns {Promise<Array<Quote>>} - A promise that resolves to an array of Quote objects.
      @throws {Error} - If the API request fails or returns an error status code.
    */

    async getMovieQuotes(id) {
      const result = await apiRequest.get({ path: `${path}/${id}/quote` });
      if (result.status !== 200) throw Error(result.data);
      const quotes = result.data?.docs;
      if (quotes && Array.isArray(quotes)) {
        return quotes.map((quote) => Quote.fromObject(quote));
      }
      if (!quotes) return [];
      return Quote.fromObject(quote);
    },
  };
};
