const SeriesData=(props)=>{
    console.log(props)
     return(
         
            <li>
                <div>
                  <img src={props.curElem.img_url} width="70%" height="70%" alt={props.curElem.name} />
                </div>
                <h2>Name: {props.curElem.name}</h2>
                <h3>Rating: {props.curElem.rating}</h3>
                <p>Summary: {props.curElem.description}</p>
                <p>Genre: {props.curElem.genre}</p>
                <p>Cast: {props.curElem.cast}</p>
                <a href={props.curElem.watch_url} target="_blank" rel="noopener noreferrer">
                    <button>Watch Now</button>
                </a>
            </li>
        );
     
}
export default SeriesData