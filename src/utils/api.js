const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: " https://the-one-api.dev/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error) => {
  if (axios.isAxiosError(error)) {
    return error.response;
  } else {
    throw error.message || error;
  }
};

const makeApiRequest = async ({ path, method, params, body, headers }) => {
  try {
    const response = await axiosInstance({
      url: path,
      method,
      data: body,
      params,
      headers,
    });
    return response;
  } catch (error) {
    return handleError(error);
  }
};

const apiRequest = (apiKey) => {
  return {
    get: ({ path, params }) =>
      makeApiRequest({
        path,
        params,
        headers: { Authorization: `Bearer ${apiKey}` },
      }),
    post: ({ path, method, params, body }) =>
      makeApiRequest({ path, method, params, body }),
  };
};

module.exports = apiRequest;
