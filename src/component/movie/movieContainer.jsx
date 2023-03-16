import React from "react";
import styled from "styled-components";
import { imageURL } from "../../config/config";

const ParentContainer = styled.div`
display:felx;
`;

const TextContainer = styled.div`
color:white;
`
const MovieContainer = (props) =>{
    const{movie} = props;
    console.log(movie);
    return(
        <ParentContainer>
            <TextContainer>
                <h6></h6>
            </TextContainer>  
        </ParentContainer>
    )

}
export default MovieContainer