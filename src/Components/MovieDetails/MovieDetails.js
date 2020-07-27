import React from 'react'
import Styled from 'styled-components'
import {MdCancel} from 'react-icons/md'

const Span=Styled.span`
display:flex;
position:absolute;
margin-top:20px;
margin-right:106px;
width:50px;
box-shadow:0 0 8px black;
opacity:75%;
height:5vh;
algin:center;
border-top-right-radius:50%;
border-bottom-right-radius:50%;
background:black;
`;

const H3=Styled.h3`
    color: #FFF;
    font-size: 20px;
    font-weight: 600;
    padding: 15px;
    width:124px;
    background: #223343;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
	flex: 1 1 100%;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: 0.4s ease-out;`;

const Image2=Styled.img`
border-radius:10px;
margin-bottom:0px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
width:150px;
hover{
	box-shadow:0 0 25px black;
}
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
const MovieDetails=(props)=> {

	function openSlide(){
		document.getElementById('menu').style.width = '500px';
		document.getElementById('menus').style.width= '0px';
	}
	function CloseSlide(){
		document.getElementById('menu').style.width = '0px';	
	}
	return (
		<div>
			<Div2 id="menu">
			  <MdCancel onClick={CloseSlide} className="md-cancel" size="3rem"/>
			</Div2>
		     <div className="result" onClick={openSlide}>
			 <Span>Rate</Span>
			<Image2 src={props.image} alt="" />
			
           <H3>{props.name}<h5>{props.genre}</h5></H3>
		   
		</div>
		</div>
	)
}

export default MovieDetails;
