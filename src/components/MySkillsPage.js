import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Developer } from "../components/AllSvgs";

import LogoComponent from "../SubComponents/LogoComponent";
import PowerButton from "../SubComponents/PowerButton";
import SocialIcons from "../SubComponents/SocialIcons";
import ParticlesComponent from "../SubComponents/ParticlesComponent";
import BigTitle from "../SubComponents/BigTitle";

import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-family: "Ubuntu Mono", monospace;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6rem + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

// constraints from animating top to bottom (DROP IN)
const containerVariants = {
  // hidden: {
  //   opacity: 0,
  //   y: "-100vh",
  // },
  // visible: {
  //   opacity: 1,
  //   y: 0,
  //   transition: { type: "spring", delay: 0.5, duration: 1 },
  // },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { ease: "easeIn", duration: 1 },
  },
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box variants={containerVariants} exit="exit">
        <LogoComponent theme="light" />
        <PowerButton theme="light" />
        <SocialIcons theme="light" />
        <ParticlesComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} />
            Design
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Developer width={40} height={40} /> Full Stack Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" left="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
