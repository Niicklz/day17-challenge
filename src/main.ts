
import { movieEl, movieElProps } from "./movieTemplate";

const movieContainer = document.getElementById("main")!;
const searchBar = document.getElementById("searchBar") as HTMLInputElement;
const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;


searchBar.addEventListener("keypress", (e) => {
  e.key === "Enter" && searchBar.value.trim() !== "" &&
    showMovies(
      `https://api.themoviedb.org/3/search/movie?query=${searchBar.value}&include_adult=false&language=en-US&page=1`
    );
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${apiKey}`,
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
