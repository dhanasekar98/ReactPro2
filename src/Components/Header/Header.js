import React from 'react'
import Styled from 'styled-components'
import Image from '../assets/download.jpg'
import {MdCancel} from 'react-icons/md'
import Apikey from '../API/Apikey'


const Div1=Styled.div`
display:flex;
align-items:center;
background:black;
margin:0px;
color:white;
 height:13vh;
 width:100%;
 border-radius:25px;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;`

const H1=Styled.h1`
align-content: center;
    font-size: x-large;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    margin-left:10%;`;
const Input=Styled.input`
algin-content:center;
height:8vh;
width:50vh;
margin-left:40vh;
border-radius:10px;
background:#222;
border:0px;
outline:none;
font-size:4vh;
color:#fff;
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

const Image1=Styled.img`
display:flex;
width:50px;
height:50px;
border-radius:50%;
margin-left:60vh;
box-shadow:0 0 25px;`;

const Header=(props)=>{
    const[query,setQuery]=React.useState('');
    
    function CloseSlide(){
		document.getElementById('menu').style.width = '0px';	
    }
    function handleChange(e){
    
        e.preventDefault();
        setQuery(e.target.value);
    }
    
    return(
    
        <Div1>
            <Div2 id="menu">
			  <MdCancel onClick={CloseSlide} className="md-cancel" size="3rem"/>
			</Div2>
               <H1>Halido</H1>
               <Input type="text"
                name="search"
                placeholder="search.."
                value={query}
                onChange={handleChange}
                />
               <Apikey name={query}/>
               <Image1 src={Image} alt=""/>
            
        </Div1>
    )
}
export default Header;