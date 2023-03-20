import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { singleMovie } from "../../services/movies";
import Header from "../common/header";
import MovieContainer from "./movieContainer";

const Movie = () =>{
    const {id} = useParams();
    console.log(id);
    const [movie, setSingleMovie] = useState({});
    useEffect(() => {
    const fetchData = async () => {
      const res = await singleMovie(id);
      setSingleMovie(res);
      console.log(movie)
    };
    if(id){
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