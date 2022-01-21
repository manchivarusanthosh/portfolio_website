import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba},0.1)`};
  z-index: 0;

  font-size: calc(5rem + 5vw);
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
