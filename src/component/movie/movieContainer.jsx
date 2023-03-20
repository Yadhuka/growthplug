import React from "react";
import styled from "styled-components";
import { imageURL } from "../../config/config";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ParentContainer = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  color: white;
  margin-top: 20px;
  padding: 40px;
`;

const ImageContainer = styled.div`
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;
const MovieContainer = (props) => {
  const { movie } = props;
  console.log(movie);
  return (
    <ParentContainer>
      <TextContainer>
        <ArrowLeftOutlined />
        <h3>{movie.title}</h3>
        <p style={{ fontSize: "12px" }}>Rating: {movie.vote_average / 2}/5</p>
        <p style={{ fontSize: "15px", fontWeight: "lighter" }}>
          {movie.overview}
        </p>
        <p style={{ fontSize: "12px" }}>Release Date: {movie.release_date}</p>
        <p style={{ fontSize: "12px" }}>
          Original Language: {movie.original_language}
        </p>
      </TextContainer>
      <ImageContainer>
        <img
          style={{ height: "500px", width: "1000px" }}
          src={imageURL + movie.backdrop_path}
        />
      </ImageContainer>
    </ParentContainer>
  );
};
export default MovieContainer;
