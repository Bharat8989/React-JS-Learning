// import '../components/Netflix.css'
import style from './Netflix.module.css'

import styled from 'styled-components'

const SeriesData = (props) => {
    console.log(props)
    const { data } = props
     const ButtonBk=styled.button({
        padding: '1.2rem 2.4rem',
            border: 'none',
            fontSize: '1.6rem',
            backgroundColor: data.rating > 8.5 ? '#7dcea0' : '#f7dc6f',
            color: 'black',
            fontWeight: 'bold',
            cursor: 'pointer',
     })
    // const btn_style = {
    //     padding: '1.2rem 2.4rem',
    //     border: 'none',
    //     fontSize: '1.6rem',
    //     backgroundColor: data.rating > 8.5 ? '#7dcea0' : '#f7dc6f',
    //     color: 'black',
    //     fontWeight: 'bold',
    //     cursor: 'pointer',
    // }  

    // Adjusting the className with correct usage of CSS Modules
    const ratingClass = data.rating > 8.5 ? style.super_hit : style.average

    return (
        <li className={style.card}>
            <div>
            <img className={style.imgSize} src={data.img_url} width="70%" height="70%" alt={data.name} />
            </div>
            {/* <div className={style.cardContent}> */}
               <div className='flex flex-col gap-7 py-6 px-6'>
                <h2>Name: {data.name}</h2>
                <h3 style={{ fontSize: '1.3rem' }}>Rating: <span className={ratingClass}>{data.rating}</span></h3>
                <p className="text-3xl font-bold none text-cyan-300">Summary: {data.description}</p>
                <p>Genre: {data.genre}</p>
                <p>Cast: {data.cast}</p>
                <a href={data.watch_url} target="_blank" rel="noopener noreferrer">
                    {/* <button style={btn_style}>Watch Now</button> */}
                    <ButtonBk>Watch Now</ButtonBk>
                </a>
            </div>
        </li>
    );
}

export default SeriesData;
