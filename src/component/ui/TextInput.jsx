import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.input`
    width: calc(100% - 32px);
    ${(props) =>
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    background-color : #caf7f5;
`;

function TextInput(props){
  const {height, value, onChange, onKeyPress} = props;

  return <StyledTextarea height={height} value = {value} onChange={onChange} onKeyDown={onkeydown} />;
}

export default TextInput;