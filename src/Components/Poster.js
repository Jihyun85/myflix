import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  height: 180px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 2px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `http://image.tmdb.org/t/p/w300${imageUrl}`
              : `https://github.com/nomadcoders/nomflix/blob/2b3839f5d0adc1f6e9ea7d126285ac81c53cea82/src/assets/noPosterSmall.png?raw=true`
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.proptTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  year: PropTypes.number,
  isMovie: PropTypes.bool,
};

export default Poster;
