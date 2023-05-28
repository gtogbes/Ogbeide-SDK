# Lord of the Rings API SDK Design

## Overview

The Lord of the Rings API SDK is designed to provide a convenient and intuitive way to interact with the Lord of the Rings API and retrieve movie and quote data. It follows a modular structure, separating the movie and quote services into separate modules to enhance code organization and maintainability.

## Architecture

The SDK is built using a modular architecture, consisting of two main modules: `movies` and `quotes`. Each module encapsulates the functionality related to retrieving movies and quotes, respectively.

The `movies` module provides the following functions:

- `getAll(options)`: Retrieves a list of movies from the API.
- `getById(id)`: Retrieves a movie by its ID from the API.
- `getMovieQuotes(id)`: Retrieves a list of quotes for a movie from the API.

The `quotes` module provides the following functions:

- `getAll(options)`: Retrieves a list of quotes from the API.
- `getById(id)`: Retrieves a quote by its ID from the API.

## SDK Usage

To use the SDK, you can follow these steps:

1. Install the SDK by running `npm install ogbeide-lord-of-the-rings-sdk`.

2. Import the SDK into your project:

   ```js
   const LordOfTheRingsSDK = require("ogbeide-lord-of-the-rings-sdk");
   ```

3. Create an instance of the SDK by providing the API key:

    ```js
    const apiKey = "YOUR_API_KEY";
    const sdk = new LordOfTheRingsSDK(apiKey);
    ```
    Note: Make sure to replace 'YOUR_API_KEY' with your actual API key.

4. Use the provided functions to interact with the Lord of the Rings API, such as sdk.movies.getAll() or sdk.quotes.getById(id).

## Error Handling

The SDK includes error handling to handle API request failures and error status codes. If an error occurs during an API request, an `Error` object will be thrown with the corresponding error message.
