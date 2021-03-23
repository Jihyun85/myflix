import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
  margin-top: -30px;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  z-index: 1;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`http://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `http://image.tmdb.org/t/p/original${result.poster_path}`
              : `https://github.com/nomadcoders/nomflix/blob/2b3839f5d0adc1f6e9ea7d126285ac81c53cea82/src/assets/noPosterSmall.png?raw=true`
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
