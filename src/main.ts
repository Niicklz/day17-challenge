import { movieEl, movieElProps } from "./movieTemplate";

const movieContainer = document.getElementById("main")!;
const searchBar = document.getElementById("searchBar") as HTMLInputElement;

searchBar.addEventListener("keypress", (e) => {
  e.key === "Enter" &&
    showMovies(
      `https://api.themoviedb.org/3/search/movie?query=${searchBar.value}&include_adult=false&language=en-US&page=1`
    );
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODA4YTgzM2NmZDUwYmZhOGYwM2Q1ZDk2MGU2ZGM2YyIsInN1YiI6IjY0MmM5YjMyOGRlMGFlMDBiNjU2ODJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZEJpJ4-UIGMXKH5xMhcC49ojiyfCCTIA90HMZnVw1qw",
  },
};

const getData = async (url: string) => {
  const res = await fetch(url, options);
  const { results } = await res.json();

  return results;
};

const showMovies = async (url: string) => {
  const movies = await getData(url);
  movieContainer.innerHTML = "";
  searchBar.value = "";

  movies.forEach((movie: movieElProps) => {
    movieContainer.innerHTML += movieEl(movie);
  });
};
showMovies("https://api.themoviedb.org/3/trending/movie/week");
