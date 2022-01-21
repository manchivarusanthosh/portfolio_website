import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../SubComponents/LogoComponent";
import PowerButton from "../SubComponents/PowerButton";
import SocialIcons from "../SubComponents/SocialIcons";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  height: 60vh;
  width: 50vw;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggeredChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />

        <Main variants={container} initial="hidden" animate="show">
          Work Page
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
