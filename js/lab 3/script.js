const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");
const movieInfo = document.getElementById("movieInfo");
const moviePoster = document.getElementById("moviePoster");

const apikey = "3be400a5";

searchBar.addEventListener("keyup", (e) => {
  if (e.key == "ArrowDown") {
    navigation("ArrowDown");
  } else if (e.key == "ArrowUp") {
    navigation("ArrowUp");
  } else if (e.key == "Enter") {
    navigation("Enter");
  } else {
    if (searchBar.value.length > 2) {
      let letters = searchBar.value;
      loadMovies(letters);
    }
    if (searchBar.value.length < 3) {
      results.innerHTML = "";
    }
  }
});

let selectedMovie = -1;

const navigation = (e) => {
  let allMovies = Array.from(document.querySelectorAll(".movie"));

  if (e === "ArrowDown") {
    if (selectedMovie >= 0) {
      allMovies[selectedMovie].classList.remove("selected");
    }
    selectedMovie = (selectedMovie + 1) % allMovies.length;
    allMovies[selectedMovie].classList.add("selected");
  } else if (e === "ArrowUp") {
    if (selectedMovie < 10 && selectedMovie >= 0) {
      allMovies[selectedMovie].classList.remove("selected");
    }
    selectedMovie = (selectedMovie - 1) % allMovies.length;
    if (selectedMovie < 0) {
      selectedMovie = 9;
    }
    allMovies[selectedMovie].classList.add("selected");
  } else if (e === "Enter") {
    allMovies[selectedMovie].onclick();
  }
};

const createDropdown = (data) => {
  selectedMovie = -1;
  if (data.Search) {
    results.innerHTML = `<ul class="moviesList" id="moviesList"></ul>`;

    for (let i = 0; i < data.Search.length; i++) {
      const element = data.Search[i];
      moviesList.innerHTML += `<li class="movie" onclick="getSingleMovie('${element.imdbID}')">${element.Title}</li> `;
      if (i === 9) {
        return;
      }
    }
  } else {
    results.innerHTML = `<ul class="moviesList" id="moviesList"></ul>`;
    moviesList.innerHTML = `<li class="error">${data.Error}</li>`;
  }
};

const createMovieInfo = (data) => {
  results.innerHTML = "";
  searchBar.value = "";
  movieInfo.innerHTML = `
  <ul id="movieInfoList"></ul>`;
  let movieInfoList = document.getElementById("movieInfoList");
  movieInfoList.innerHTML += `<img src="${data.Poster}"></img>`;
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (Object.keys(data)[i] === "Poster") {
      ("");
    } else if (Object.keys(data)[i] === "Ratings") {
      for (let j = 0; j < Object.values(data)[i].length; j++) {
        console.log(Object.values(data)[i][j]);
        movieInfoList.innerHTML += `<li>${Object.keys(data)[i]}: ${
          Object.values(data)[i][j].Source
        }: ${Object.values(data)[i][j].Value}
        </li>`;
      }

      // Fix ratings
    } else {
      movieInfoList.innerHTML += `<li>${Object.keys(data)[i]}: ${
        Object.values(data)[i]
      } </li>`;
    }
  }
};

const loadMovies = async (letters) => {
  try {
    await fetch(`http://www.omdbapi.com/?s=${letters}&apikey=${apikey}`)
      .then((response) => response.json())
      .then((data) => {
        createDropdown(data);
      });
  } catch (err) {
    console.log(err);
  }
};

const getSingleMovie = async (imdbID) => {
  try {
    await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`)
      .then((response) => response.json())
      .then((data) => {
        createMovieInfo(data);
      });
  } catch (err) {
    console.log(err);
  }
};