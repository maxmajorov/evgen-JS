import axios from "axios";

export const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
  //   headers: { "API-KEY": "2364fe6f" },
  //   withCredentials: true,
});

const API_KEY: string = "2364fe6f";

const API = {
  searchFilmsByTitle: (title: string) => {
    return instance.get(`?&apikey=${API_KEY}&s=${title}`).then((response) => {
      console.log(response);
      return response;
    });
  },

  searchFilmsByType: async (title: string, type: string) => {
    return await instance
      .get(`?&apikey=${API_KEY}&s=${title}&type=${type}`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
};

// export type MoviesResponseType = {
//   Response: string;
//   Search: [Title: string, Type: string, Year: string, imdbID: string];
//   totalResults: string;
// };

export default API;
