const results = document.getElementById('results');
const searchBar = document.getElementById('searchBar');
const movieInfo = document.getElementById('movieInfo');
const moviePoster = document.getElementById('moviePoster');

const apikey = '3be400a5';

searchBar.addEventListener('keyup', (e) => {
  if (e.key == 'ArrowDown') {
    navigation('ArrowDown');
  } else if (e.key == 'ArrowUp') {
    navigation('ArrowUp');
  } else if (e.key == 'Enter') {
    navigation('Enter');
  } else {
    if (searchBar.value.length > 2) {
      let letters = searchBar.value;
      loadMovies(letters);
    }
    if (searchBar.value.length < 3) {
      results.innerHTML = '';
    }
  }
});

let selectedMovie = -1;

const navigation = (e) => {
  let allMovies = Array.from(document.querySelectorAll('.movie'));

  if (e === 'ArrowDown') {
    if (selectedMovie >= 0) {
      allMovies[selectedMovie].classList.remove('selected');
    }
    selectedMovie = (selectedMovie + 1) % allMovies.length;
    allMovies[selectedMovie].classList.add('selected');
  } else if (e === 'ArrowUp') {
    if (selectedMovie < 10 && selectedMovie >= 0) {
      allMovies[selectedMovie].classList.remove('selected');
    }
    selectedMovie = (selectedMovie - 1) % allMovies.length;
    if (selectedMovie < 0) {
      selectedMovie = 9;
    }
    allMovies[selectedMovie].classList.add('selected');
  } else if (e === 'Enter') {
    allMovies[selectedMovie].onclick();
  }
};

const createMovieList = (data) => {
  selectedMovie = -1;
  results.innerHTML = '';
  if (data.Search) {
    for (let i = 0; i < data.Search.length; i++) {
      const element = data.Search[i];
      if (i > 9) {
        return;
      }
      if (element.Poster === 'N/A') {
        results.innerHTML += `<div class="movie" id="movie${
          i + 1
        }" onclick="toggleMovieSummary(${
          i + 1
        })"><div class="image noPosterAvailable" ><p class="noPosterText" >No Poster Available</p></div><div id="movie${
          i + 1
        }InfoList" class="movieInfoList"></div></div>`;
        console.log(i);
      } else {
        results.innerHTML += `<div class="movie" id="movie${
          i + 1
        }" onclick="toggleMovieSummary(${
          i + 1
        })"><div class="image" ><img src="${
          element.Poster
        }"></img></div><div id="movie${
          i + 1
        }InfoList" class="movieInfoList"></div></div>`;
        console.log(i);
      }
      getMovieSummary(element.imdbID, i + 1);
    }
  } else {
    results.innerHTML = `<div class="error">No movies matched your search, try again!</div>`;
  }
};

const createMovieSummary = (data, movieID) => {
  let movieInfoList = document.getElementById(`movie${movieID}InfoList`);
  movieInfoList.innerHTML += `
  <p class="title">Title: ${data.Title} <img src="./times-solid.svg" class="times" ></img></p>
  <p class="info">Year: ${data.Year}</p>
  <p class="info">Genre: ${data.Genre}</p>
  <p class="info">Summary: ${data.Plot}</p>
  <p class="info">Runtime: ${data.Runtime}</p>
  <p class="imdbRating">IMDB Rating:  ${data.imdbRating}💩</p>
  <a class="viewMore" target="_blank" href="https://www.imdb.com/title/${data.imdbID}/">View more..</a>
  `;
};

const toggleMovieSummary = (movieID) => {
  let movieInfoList = document.getElementById(`movie${movieID}InfoList`);

  movieInfoList.classList.toggle('showInfo');
};

// const createMovieInfo = (data) => {
//   results.innerHTML = "";
//   searchBar.value = "";
//   movieInfo.innerHTML = `
//   <div id="movieInfoList"></div>`;
//   let movieInfoList = document.getElementById("movieInfoList");
//   movieInfoList.innerHTML += `<img src="${data.Poster}"></img>`;
//   for (let i = 0; i < Object.keys(data).length; i++) {
//     if (Object.keys(data)[i] === "Poster") {
//       ("");
//     } else if (Object.keys(data)[i] === "Ratings") {
//       for (let j = 0; j < Object.values(data)[i].length; j++) {
//         console.log(Object.values(data)[i][j]);
//         movieInfoList.innerHTML += `<div>${Object.keys(data)[i]}: ${
//           Object.values(data)[i][j].Source
//         }: ${Object.values(data)[i][j].Value}
//         </div>`;
//       }

//       // Fix ratings
//     } else {
//       movieInfoList.innerHTML += `<div>${Object.keys(data)[i]}: ${
//         Object.values(data)[i]
//       } </div>`;
//     }
//   }
// };

const loadMovies = async (letters) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${letters}&apikey=${apikey}`
    );
    const data = await response.json();
    createMovieList(data);
  } catch (err) {
    console.log(err);
  }
};

const getMovieSummary = async (imdbID, movieID) => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
    );
    const data = await response.json();
    createMovieSummary(data, movieID);
  } catch (err) {
    console.log(err);
  }
};