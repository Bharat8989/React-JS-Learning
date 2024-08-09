// import seriesData from './seriesData.json';
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
    return (
        <ul>
            {seriesData.map((curElem) => {
                return (
                    <li key={curElem.id}>
                        <div>
                            <img src={curElem.img_url} width="70%" height="70%" alt={curElem.name} />
                        </div>
                        <h2>Name: {curElem.name}</h2>
                        <h3>Rating: {curElem.rating}</h3>
                        <p>Summary: {curElem.description}</p>
                        <p>Genre: {curElem.genre}</p>
                        <p>Cast: {curElem.cast}</p>
                        <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NetflixSeries;
