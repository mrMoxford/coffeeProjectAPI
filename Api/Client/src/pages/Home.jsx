import React from "react";

import styled from "styled-components";
import Video2 from "../assets/Videos/coffeevid02.mp4";
import { tabletDevice, smallDevice } from "../Responsive";

const Container = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  z-index: 5;
  pointer-events: none;
`;
const HeaderTitle = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  width: 100%;
  color: white;
  ${tabletDevice({ fontSize: "clamp(1rem,5vw,3rem);" })};
  // ${smallDevice({ fontSize: "1.5rem;" })};
`;
const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const Video = styled.video`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;
const Home = () => {
  return (
    <Container>
      <Content>
        <HeaderTitle>Let us take your tastebuds on a journey of discovery...</HeaderTitle>
      </Content>
      <VideoContainer>
        <Video onMouseOver={e => e.target.play()} muted>
          <source src={Video2} type="video/mp4" />
        </Video>
      </VideoContainer>
    </Container>
  );
};
export default Home;
