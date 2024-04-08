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