import axios from 'axios'
import React, { useEffect } from 'react'
import Search from '../Search/Search'
const API_key='1c4dd828a7f00afe277144e5dd1552df';

const Apikey=(props)=>{
    const [results,setResults]=React.useState([]);

    useEffect(()=>{

        axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=${API_key}&language=en-US&query=${props.name}&page=1&include_adult=false`)
        .then((res)=>{
            
            setResults(res.data.results);
        }).catch((err)=>{
            console.log(err);
        })


    },[props.name])
    return(
        <div>
            <Search data={results}/>
        </div>
    )
}
export default Apikey;