import axios from 'axios'
import "../../assets/mm.css"
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


export const MovieDetail = () => {
  const [recieveData, setRecieveData] = useState({});

  const movieid = useParams().id;

  const getMovieDetail = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=a6c87d96&i=${movieid}`)
    console.log(res.data);
    setRecieveData(res.data);
  }



let y_link = "https://www.youtube.com/results?search_query="

  return (<div>
    {recieveData == "" ? "" :
      <div className="first">
        <div className="mname">
          <h3 style={{ color: "red" ,textAlign:"center"}}>{recieveData.Title}</h3><span>{recieveData.Released} - {recieveData.Runtime} -  {recieveData.Language}- {recieveData.Type}</span>
          <h5><i class="fas fa-star" style={{ color: "yellow" }}></i> &nbsp;
            {recieveData.imdbRating}/10</h5>
          <button onClick={() => { getMovieDetail() }} style={{ float: "right", marginRight: "15px", }}>Get Movie</button>
        </div>

        <div className="sec">

          <img src={recieveData.Poster} alt="" />
          <video src= {y_link+ recieveData.Title} controls autoPlay className='vid' ></video>

          <div className="smallboxes">
            <div className="fbox"><i class="fas fa-play"></i></div>
            <div className="sbox"><i class="fas fa-play"></i></div>
          </div>

        </div>

        <div id="genre">{recieveData.Genre}</div>
        <div id="itemss" style={{ width: "65%" }}>{recieveData.Plot}</div>

        <div className="secCon">


          <div className="detail">

            <div id="items">Director : &nbsp; {recieveData.Director}</div>
            <div id="items">Writers : &nbsp;{recieveData.Writer}</div>
            <div id="items">Actors : &nbsp;{recieveData.Actors}</div>
            <div id="items">Imdb Votes :&nbsp; {recieveData.imdbVotes} <i class="fas fa-vote-yea"></i></div>

          </div>
          
          

          <div className="stream">
            <h4 style={{marginTop:"20px"}}>Streaming..</h4><br />
            <img src="../src/assets/images/Zee5.webp" alt="fef" className='s1' />
            <img src="../src/assets/images/amazon.webp" alt="fef" className='s1' /><br />
            
          </div>
          

        </div>



      </div>
    }
    <div className="second">
        <div id="award"><i class="fas fa-trophy" style={{color:"gold"}}></i> &nbsp;

          Awards  :  {recieveData.Awards}<br/>
          <i class="fas fa-trophy"></i> &nbsp; Box Office Collection : {recieveData.BoxOffice}
        </div>
    </div>
  </div>
  )
}
