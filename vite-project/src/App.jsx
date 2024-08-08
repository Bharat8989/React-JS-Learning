//rafce
import React from 'react'

const App = () => {
  return (
    <React.Fragment>
      <NetflixSeries></NetflixSeries>
    <NetflixSeries></NetflixSeries>
    <NetflixSeries></NetflixSeries>
    <NetflixSeries></NetflixSeries>
    <NetflixSeries></NetflixSeries>
    </React.Fragment>
  )
}

const NetflixSeries=()=>{
  const returnGenre=()=>{
    const genre="RomComp";
    return genre;
  }
  const name='Queen of Tears'
  const rating='8.3'
  return (
    <div>
     <div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.q_ncYnMDBTBP8Wr1eBtCggHaEK?rs=1&pid=ImgDetMain" width='70%' height='400px' alt="" />
      </div>
      <h2>Name:{name}</h2>
      <h3>Rating : {rating }</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima, officia veritatis doloremque incidunt odit porro, hic harum error fugiat ducimus in? Ducimus minima cum nesciunt distinctio sint numquam ex.</p>
      <p>Genre:{returnGenre()}</p>
    </div>

   </div>
  )
}

export default App

