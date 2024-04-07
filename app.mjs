//Initial References
let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//Function to fetch data from API
let getMovie = (movieName) => {
  return new Promise((resolve, reject) => {
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`;

    fetch(url, {
      method: "GET", // Specifying the request method as GET
    })
      .then((resp) => resp.json())
      .then((data) => {
        //If movie exists in database
        if (data.Response == "True") {
          result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
        `;
          resolve(data);
        } else {
          result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
          reject(data.Error);
        }
      })
      .catch((error) => {
        result.innerHTML = `<h3 class="msg">Error Occurred</h3>`;
        reject('Error Occurred');
      });
  });
};

// Call the function and handle the promise
searchBtn.addEventListener("click", () => {
  let movieName = movieNameRef.value;
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  } else {
    getMovie(movieName)
      .then((data) => {
        console.log('Movie data:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});

window.addEventListener("load", () => {
  let movieName = movieNameRef.value;
  if (movieName.length > 0) {
    getMovie(movieName)
      .then((data) => {
        console.log('Movie data:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});
