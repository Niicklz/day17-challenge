export interface movieElProps {
    overview:string;
    poster_path:string;
    title:string;
    vote_average:number;
    
    }
    



    function reduceText(text:string, maxLength:number) {
        if (text.length <= maxLength) {          
          return text;
        } else {
         
          const textModified = text.substring(0, maxLength - 3) + "..."
          return textModified;
        }
      }
export const movieEl = ({overview,poster_path,title,vote_average}:movieElProps)=> {
    return `<article class="movie-card">
    <div class="description">
      <h5>Overview</h5>
      <p>${reduceText(overview,450)}</p>
    </div>
    <figure><img src="https://image.tmdb.org/t/p/w1280${poster_path}" alt=""></figure>
    <div class="movie-info">
      <h2>${reduceText(title, 60)}</h2>
      <h4 class="rating">${vote_average.toFixed(1)}</h4>
    </div>
  </article>`
}