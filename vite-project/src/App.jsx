import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </React.Fragment>
  );
};

const NetflixSeries = () => {
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };

  const name = 'Queen of Tears';
  const rating = '8.3';
  
  // Using prompt inside a component can cause issues with React's rendering process.
  // Instead, it might be better to handle this in a different way, like passing the age as a prop or using state.
  let age = 23;

  if (age <= 18) {
    return (
      <div>
        <div>
          <div>
            <img src="https://th.bing.com/th/id/OIP.q_ncYnMDBTBP8Wr1eBtCggHaEK?rs=1&pid=ImgDetMain" width='70%' height='400px' alt="" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima, officia veritatis doloremque incidunt odit porro, hic harum error fugiat ducimus in? Ducimus minima cum nesciunt distinctio sint numquam ex.</p>
          <p>Genre: {returnGenre()}</p>
          <button>Not Available</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <img src="https://th.bing.com/th/id/OIP.q_ncYnMDBTBP8Wr1eBtCggHaEK?rs=1&pid=ImgDetMain" width='70%' height='400px' alt="" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima, officia veritatis doloremque incidunt odit porro, hic harum error fugiat ducimus in? Ducimus minima cum nesciunt distinctio sint numquam ex.</p>
        <p>Genre: {returnGenre()}</p>
        <button>Watch Now</button>
      </div>
    </div>
  );
};

export default App;
