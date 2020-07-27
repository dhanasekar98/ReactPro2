import React from 'react'
import Styled from 'styled-components'
import axios from 'axios';
import {MdCancel} from 'react-icons/md'
import {FaRegPlayCircle} from 'react-icons/fa'
import ReactPlayer  from 'react-player'

const API_key='1c4dd828a7f00afe277144e5dd1552df';



const Image2=Styled.img`
width:100px;
height:100px;
margin:3px;`;
const Div=Styled.div`
 
   position:absolute;
    top:70px;
    left:470px;
    right:0px;
    background:black;
    text-align:left;
    width:50vh;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;  
`;
const Div2=Styled.div`
height: 100%;
width: 0;
position: fixed;
z-index: 1;
margin-right: 0px;
top: 0;
margin-top:100px;
right: 0;
background-color: #000;
opacity: 0.9;
overflow-x: hidden;
padding-top: 60px;
transition: 0.7s;`

const Para=Styled.p`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
text-transform: capitalize;

color:white;`;

const Image3=Styled.img`
margin:5px;
border:2px solid #999;
box-shawdow:0 0 15px blue;
width:98%;
height:100%
`;
const Div3=Styled.div`
margin-bottom:10px;
box-shawdow:0 0 15px blue;
width:98%;
height:40%`;
const Div4=Styled.div`
margin-bottom:10px;
box-shawdow:0 0 15px blue;
width:98%;
height:40%;`;


const Search=(props)=>{
    const Results=props.data;
    const[MovieDetails,SetMovieDetails]=React.useState([]);
     const [key,setKey]=React.useState('');
     const [correct,setCorrect]=React.useState(true);
    
	function openSlide(){
        document.getElementById('menus').style.width = '500px';
        document.getElementById('menu').style.width='0px';
	}
	function CloseSlide(){
        document.getElementById('menus').style.width = '0px';	
        setCorrect(true);
        
	}

    function handleClick(id){


     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US`)
     .then((res)=>{
         console.log(res.data);
         SetMovieDetails(res.data);
         
     }).catch((err)=>{
         console.log(err);
     }) 
     setCorrect(true);
     
     openSlide();
    }

    function PlayerEnable(){
        axios.get(`https://api.themoviedb.org/3/movie/${MovieDetails.id}/videos?api_key=${API_key}&language=en-US`)
        .then((res)=>{
            console.log(res.data.results[0].key)
            setKey(res.data.results[0].key);
        }).catch((err)=>{
            console.log(err);
        })

        setCorrect(false);
        
    }
    

    return(
        <Div>
             <Div2 id="menus">
			  <MdCancel onClick={CloseSlide} className="md-cancel" size="3rem"/>
              { correct ?(
               <Div3>
              <Image3 src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`} alt={MovieDetails.title}/>
              <FaRegPlayCircle  onClick={PlayerEnable} size="7rem" className="Play"/> 
              </Div3>):false}

              {correct?false:( <Div4>
                  <ReactPlayer playing="true" controls="true" url={`https://www.youtube.com/watch?v=${key}`} width="100%" height="100%"/>
                  </Div4>
              )}
              
              <h1>{MovieDetails.original_title}</h1>
              <h3>Rating:{MovieDetails.vote_average}/10</h3>
              <Para>{MovieDetails.overview}</Para>
			</Div2>
            {
                Results.length>0 &&(
                    <ul>{
                        Results.slice(0,5).map((movie)=>(
                            <ol onClick={()=>handleClick(movie.id)} >
                            <h3>{movie.title}</h3> 
                            
                            {movie.poster_path?(<Image2 classname="image3" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}Poster`}/>):
                            false}
                            </ol>
                        )
                        )}</ul>
                    )
            }
            
          
        </Div>
    )
}
export default Search;