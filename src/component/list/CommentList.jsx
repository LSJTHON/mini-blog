import React from "react";
import styled from "styled-components";
import CommentListItem from "./ComponentListItem";

const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;
  justify-content : center;
  :not(:last-child){
    margin-bottom : 16px;
  }
  
`;


function CommentList(props){
  const {comments} = props;
  const {writetime} =props;

  return (
    <Wrapper>
      {comments.map((comment,index)=>{
        return (
          <CommentListItem
            key={comment.id}
            comment = {comment}
            />
        );
      })}
    </Wrapper>
  );
}

export default CommentList;