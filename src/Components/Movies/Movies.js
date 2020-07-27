import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import Image1 from '../assets/jaws.png'
import Styled from 'styled-components'

const Selection=Styled.section`
padding: 15px;
display: flex;
flex-wrap: wrap;
margin: 0px -15px;
margin-top:-200px;`;

function Movies () {
    const Movie=[{
        id:1,
        name:'Jaws',
        Genre:'Drama',
        Image:{Image1}
    },
    {
        id:2,
        name:'Transformers',
        Genre:'Thriller',
        Image:{Image1}
    },{
        id:3,
        name:'Transformers',
        Genre:'Thriller',
        Image:{Image1}
        
    },{
        id:4,
        name:'Transformers',
        Genre:'Thriller',
        Image:{Image1}
        
    },{
        id:5,
        name:'Transformers',
        Genre:'Thriller',
        Image:{Image1}
        
    },{
        id:6,
        name:'Transformers',
        Genre:'Thriller',
        Image:{Image1}
        
    }]
	return (
		<Selection className="results">
			{Movie.map((result) => (
				<MovieDetails genre={result.Genre} image={result.Image.Image1}  name={result.name}/>
			))}
		</Selection>
	)
}

export default Movies;
