import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  background-color: rgba(20, 20, 20, 0.3);
`;

const List = styled.ul`
  display: flex;
  background-color: rgba(20, 20, 20, 0.5);
`;

const Title = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-bottom: 3px solid ${(props) => (props.current ? "red" : "transparent")};
  font-size: 14px;
`;

const Data = styled.div``;

const Subtitle = styled.h5``;

const Description = styled.p``;

const Tab = ({ title, handleClick, currentTab }) => (
  <Container>
    <List role="tablist">
      {title.map((string, index) => (
        <Title
          role="tab"
          aria-label={string}
          key={index}
          onClick={() => handleClick(string)}
          current={currentTab === string}
        >
          {string}
        </Title>
      ))}
    </List>
    <Data role="tabpanel">
      <Subtitle />
      <Description />
    </Data>
  </Container>
);
Tab.propTypes = {
  title: PropTypes.arrayOf(string).isRequired,
  handleClick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

export default Tab;
