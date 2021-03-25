import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Tab from "Components/Tab";

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

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  font-size: 14px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Tagline = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
`;

const LinkBox = styled.div`
  display: flex;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin: 20px 5px;
  padding: 3px 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

const DetailPresenter = ({ result, error, loading, handleClick, currentTab }) =>
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
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? `${result.runtime} min`
                : `${result.episode_run_time[0]} min`}
            </Item>
            <Divider>•</Divider>
            <Item>{result.genres.map((obj) => obj.name).join(" / ")}</Item>
          </ItemContainer>
          {result.tagline && <Tagline>{result.tagline}</Tagline>}
          <Overview>{result.overview}</Overview>
          <LinkBox>
            {result.homepage ? (
              <LinkBtn href={result.homepage} color="#6ab04c">
                Homepage
              </LinkBtn>
            ) : null}
            {result.imdb_id ? (
              <LinkBtn
                href={`https://www.imdb.com/title/${result.imdb_id}`}
                color="#f5c518"
              >
                IMDB
              </LinkBtn>
            ) : null}
          </LinkBox>
          <Tab
            title={["Production", "Collections"]}
            handleClick={handleClick}
            currentTab={currentTab}
            data={result}
          />
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default DetailPresenter;
