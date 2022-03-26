import React from "react";
import ChatMessage from "./ChatMessage";

export default function Comments(props) {
  const { comments } = props;
  return (
    <div className="container-comments-list">
      <div className="img-background"></div>
        {comments.map((comment) => (
            <ChatMessage key={comment.from_id} comment={comment}/>
        ))}
    </div>
  );
}
