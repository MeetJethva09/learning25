import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const SearchMovie = () => {

    const [moviename , setMovieName] = useState();
    const [recieveMovie , setRecieveMovie] = useState([]);

    const getMovie = async ()=>{
        const res = await axios.get(`http://www.omdbapi.com/?apikey=a6c87d96&s=${moviename}`)
        console.log(res.data.Search);
        setRecieveMovie(res.data.Search);
    }
    



  return (
    <div style={{textAlign:"center"}}>
          <h3>Serach Movies</h3>
          <input type="text" placeholder='Serch here..' onChange={(event)=>setMovieName(event.target.value)}/><br />
          <button className="btn btn-info" style={{marginTop:"5px"}} onClick={()=>{getMovie()}}>Search</button>
          <div className="contaienr" style={{display:"flex" , flexDirection:"row" ,gap:"10px",flexWrap:"wrap",marginTop:"15px",alignItems:"center" , justifyContent:"center"}}>
                {
                    recieveMovie == "" ? "" :
                    recieveMovie.map((movie)=>{
                        return(
                          
                                    <div class="card" style={{width:"12rem" , }}>
                                        <Link to={`/mdetail/${movie.imdbID}`}>
                                    <img class="card-img-top" src={movie.Poster} alt="Card image cap" style={{height:"195px"}}/>
                                        </Link>
                                    <div class="card-body">
                                        <h6 class="card-title">{movie.Title}</h6>
                                        <p class="card-text">{movie.imdbID}</p>
                                    
                                    </div>
                                    </div>
                        )
                    })
                }
                </div>
    </div>
  )
}
