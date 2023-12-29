import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding : 16px;
  display : flex;
  flex-direction : row;
  align-items : flex-start;
  justify-content : center;
  border : 1px solid grey;
  border-radius : 8px;
  cursor: pointer;
  backgorund : white;
  :hover {
    background:lightgrey;
  }
  background-color : #caf7f5;
`;

const ContentText =styled.p`
  font-size:14px;

`;
const ContentText2 =styled.p`
  font-size:14px;
  text-align : right;


`;

function CommentListItem(props){
  const {comment} = props;
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
      <ContentText2>{comment.writetime}</ContentText2>
    </Wrapper>
  );
}

export default CommentListItem;