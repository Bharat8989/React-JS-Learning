import '../components/Netflix.css'
const SeriesData=(props)=>{
    console.log(props)
    const {data}=props
    const btn_style={
        padding:'1.2rem 2.4rem',
        border:'none',
        fontSize:'1.6rem',
        backgroundColor:data.rating > 8.5 ? '#7dcea0' :'#f7dc6f' ,
        color:'black',
        fontWeight:'bold',
        cursor:'pointer',

    }
    const ratingClass=data.rating > 8.5 ? 'super_hit' :'average'
     return(
         
            <li className='card' >
                <div className='card-content'>
                  <img className="img-size" src={data.img_url} width="70%" height="70%" alt={data.name} />
                
                <h2>Name: {data.name}</h2>
                <h3 style={{fontSize:'1.3rem'}}>Rating: <span className={`rating ${ratingClass}`}>{data.rating}</span></h3>
                <p>Summary: {data.description}</p>
                <p>Genre: {data.genre}</p>
                <p>Cast: {data.cast}</p>
                <a href={data.watch_url} target="_blank" rel="noopener noreferrer">
                    <button style={btn_style}>Watch Now</button>
                </a>
                </div >
            </li>
        );
     
}
export default SeriesData