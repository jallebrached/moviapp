import React from 'react'
import './../style.css';
import ReactStars from 'react-stars'
// import ReactPlayer from 'react-player'

const MovieCard = ({ el }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='postercontainer'>
        <img src={el.posterurl} alt='poster'/>

          {/* <ReactPlayer
            className="miniplayer"
            width={"100%"}
            height={"100%"}
            loop={true}
            url={el.trailerurl}
          /> */}
        </div>
        <h4>{el.name}</h4>
        {/* <p>{el.description}</p> */}
        <ReactStars
          className='stars'
          edit={false}
          count={5}
          value={el.rating}
          color2={'#ffd700'} />
      </div>

    </>
  )
}

export default MovieCard