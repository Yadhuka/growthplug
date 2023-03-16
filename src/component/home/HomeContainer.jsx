import React from "react";
import styled from "styled-components";
import banner from "../../assets/wall.jpg";
import { imageURL } from "../../config/config";

import { PlayCircleFilled } from "@ant-design/icons";

import { Link } from "react-router-dom";

const Container = styled.div``;

const Banner = styled.div`
  height: 262px;
`;

const MoviesContainer = styled.div`
  padding: 30px 160px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #263f61;
  text-align: center;
  padding:0px 10px;
  .anticon {
    color: #ff5e62;
  }
`;

const HomeContainer = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <Container>
      <Banner>
        <img
          src={banner}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Banner>
      <MoviesContainer>
        <h2 style={{ color: "white", fontWeight: 400 }}>Trending</h2>
        <MovieListContainer>
          {movies &&
            movies.results &&
            movies.results.map((movie) => {
              return (
                <Link to={`/movie/${movie.id}`}>
                <div>
                  <img
                    style={{ height: "135px", width: "281px" }}
                    src={imageURL + movie.poster_path}
                  />
                  <MovieDetailContainer>
                    <h6 style={{ color: "white",textAlign:"center" }}>{movie.original_title}</h6>
                    <PlayCircleFilled style={{fontSize:"30px"}} />
                  </MovieDetailContainer>
                </div>
                </Link>
              );
            })}
        </MovieListContainer>
      </MoviesContainer>
    </Container>
  );
};

export default HomeContainer;
