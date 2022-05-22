import axios from "axios";

export const instance = axios.create({
  baseURL: "http://www.omdbapi.com",
  //   headers: { "API-KEY": "2364fe6f" },
  //   withCredentials: true,
});

const API_KEY: string = "2364fe6f";

const API = {
  searchFilmsByTitle: async (title: string): Promise<MoviesResponseType> => {
    return await instance
      .get(`?i=tt3896198&apikey=${API_KEY}&t=${title}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },

  searchFilmsByType: async (
    title: string,
    type: string
  ): Promise<SeriesResponseType> => {
    return await instance
      .get(`?i=tt3896198&apikey=${API_KEY}&t=${title}&type=${type}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  },
};

export type MoviesResponseType = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

export type SeriesResponseType = {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
};

export default API;
