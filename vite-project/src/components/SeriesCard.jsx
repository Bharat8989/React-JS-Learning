const SeriesData=(props)=>{
    console.log(props)
    const {data}=props
     return(
         
            <li>
                <div>
                  <img src={data.img_url} width="70%" height="70%" alt={data.name} />
                </div>
                <h2>Name: {data.name}</h2>
                <h3>Rating: {data.rating}</h3>
                <p>Summary: {data.description}</p>
                <p>Genre: {data.genre}</p>
                <p>Cast: {data.cast}</p>
                <a href={data.watch_url} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                </a>
            </li>
        );
     
}
export default SeriesData