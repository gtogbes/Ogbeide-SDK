# Lord of the Rings API SDK

This SDK provides a convenient way to interact with the Lord of the Rings API and retrieve movie and quote data.

## Installation

To use the SDK, you can install it via npm:

``` bash
npm install ogbeide-lord-of-the-rings-sdk

```

## Usage

To use the SDK, follow these steps:

+ Import the SDK into your project:

``` js
const LordOfTheRingsSDK = require('lord-of-the-rings-sdk');

```

+ Create an instance of the SDK with your api key:

``` js
const sdk = LordOfTheRingsSDK(apiKey);

```

+ Use the provided functions to interact with the Lord of the Rings API. Example usage:

``` js
// Retrieve all movies
const movies = await sdk.movies.getAll({ limit: 100 , page: 1, offset: 0});

// Retrieve a movie by ID
const movie = await sdk.movies.getById('123');

// Retrieve quotes for a movie
const quotes = await sdk.movies.getMovieQuotes('123');

// Retrieve all quotes
const allQuotes = await sdk.quotes.getAll({ limit: 100 , page: 1, offset: 0});

// Retrieve a quote by ID
const quote = await sdk.quotes.getById('456');

```

## License
This SDK is released under the MIT License.



