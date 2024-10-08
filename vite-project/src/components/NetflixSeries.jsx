// import seriesData from './seriesData.json';
import seriesData from "../api/seriesData.json";
import SeriesData from "./SeriesCard.jsx";

const NetflixSeries = () => {
    return (
        <ul className="grid grid-three--cols">
            {seriesData.map((curElem) => 
                
               <SeriesData key={curElem.id} data={curElem}/>
            )}
            
        </ul>    
    );
};

export default NetflixSeries;
