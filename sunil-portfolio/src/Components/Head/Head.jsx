import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Lottie from "react-lottie";
import scroll from "../Animations/scrollDown.json";
// import aditya from "../Images/aditya.png";
import sunil from "../Images/sunil.jpeg";

import { ParagraphWrapper } from "../Elements/Elements";

const scrollOptions = {
  loop: true,
  autoplay: true,
  animationData: scroll,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  background: url(${(props) => props.theme.header});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = styled.div`
  min-height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderContent = styled.div`
  z-index: 5;
  width: 80%;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  margin: 50px auto;
  justify-content: space-between;
  align-items: center;
  /* background-color: #03192c; */
  padding: 50px;
  > div {
    margin: 20px auto;
    width: fit-content;
    max-width: 800px;
    height: 30vh;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin: 2px;
    padding: 10px;
  }
  @media (max-width: 768px) {
    > div {
    }
  }
`;

const Heading = styled.div`
  width: 65%;
  min-width: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: space-between;
  h1 {
    font-size: 60px;
    margin: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;

    h1 {
      font-size: 40px;
      margin: 0;
    }
  }
  @media (max-width: 768px) {
  }
`;

const ActionsDiv = styled.div`
  width: 60%;
  margin: 0px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const CTAButton = styled.div`
  min-width: fit-content;
  padding: 5px 10px;
  font-size: 19px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.secondary};
  color: ${(props) => (props.currentTheme === "light" ? "black" : "white")};
  font-weight: 700;
  background-color: ${(props) => props.theme.secondary};
  transition: all 500ms ease;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.body};
    color: white;
  }
`;

const Profile = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: right;
  background-size: cover;
  img {
    width: 100%;
    border-radius: 12%;
  }
  @media (max-width: 1000px) {
    img {
      width: 50%;
      border-radius: 12%;
    }
  }
`;

const Scroller = styled.div`
  margin: 0px auto;
  width: 100px;
  @media (max-width: 1000px) {
    // display: none;
    width: 50px;
  }
`;

function Head({ currentTheme, themeToggler }) {
  return (
    <Wrapper id="home">
      <Header>
        <Navigation
          currentTheme={currentTheme}
          themeToggler={themeToggler}
        ></Navigation>
        <HeaderContent>
          <Heading>
            <ParagraphWrapper>
              <h2 style={{fontSize:'39px'}} >SUNIL KUMAR</h2>
            </ParagraphWrapper>
            <div>
              <h1>Full Stack Web Developer</h1>
            </div>
            <ParagraphWrapper>
              <p>
                Hi, it's nice to meet you. I am a full-stack web developer
                residing in Vaishali, Bihar, India.
              </p>
            </ParagraphWrapper>
            <ActionsDiv>
              <a href="#projects">
                <CTAButton currentTheme={currentTheme}>View Projects</CTAButton>
              </a>
            </ActionsDiv>
          </Heading>
          <Profile>
            <img src={sunil} alt="profile"></img>
          </Profile>
        </HeaderContent>
        <Scroller>
          <Lottie options={scrollOptions}></Lottie>
        </Scroller>
      </Header>
    </Wrapper>
  );
}

export default Head;
