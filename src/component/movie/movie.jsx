import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { singleMovie } from "../../services/movies";
import Header from "../common/header";
import MovieContainer from "./movieContainer";

const Movie = () =>{
    const {id} = useParams();
    const [movie, setSingleMovie] = useState({});
    useEffect(() => {
    const fetchData = async () => {
      const res = await singleMovie();
      setSingleMovie(res);
      console.log(movie)
    };
    if(typeof is !=='undefined'){
        fetchData();
    }
  }, [id]);
    return(
        <>
        <Header/>
        <MovieContainer movie={movie}/>
        </>
    )
}
export default Movie