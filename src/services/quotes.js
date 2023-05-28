const { Quote } = require("../entities");

module.exports = (path, apiRequest) => {
  return {
    /**

    Retrieves a list of quotes from the API.
    @param {Object} options - Options for retrieving quotes.
    @param {number} options.limit - The maximum number of quotes to retrieve. Default is 100.
    @param {number} options.page - The page number of the quote results. Default is 1.
    @param {number} options.offset - The offset for paginated results. Default is 0.
    @returns {Promise<Array<Quote>>} - A promise that resolves to an array of Quote objects.
    @throws {Error} - If the API request fails or returns an error status code.
  */
    async getAll({ limit = 100, page = 1, offset = 0 } = {}) {
      const result = await apiRequest.get({
        path,
        params: { limit, page, offset },
      });
      if (result.status !== 200) throw result.data;
      const quotes = result.data?.docs;
      if (quotes && Array.isArray(quotes))
        return quotes.map((quote) => Quote.fromObject(quote));
      return [];
    },

    /**

      Retrieves a quote by its ID from the API.
      @param {string} id - The ID of the quote to retrieve.
      @returns {Promise<Quote|null>} - A promise that resolves to a Quote object if found, or null if not found.
      @throws {Error} - If the API request fails or returns an error status code.
    */
    async getById(id) {
      const result = await apiRequest.get({ path: `${path}/${id}` });
      if (result.status !== 200) throw result.data;
      const quote = result.data?.docs[0];
      if (!quote) return null;
      return Quote.fromObject(quote);
    },
  };
};
