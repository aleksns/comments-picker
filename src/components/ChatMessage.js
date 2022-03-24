import React, { useState } from "react";
import { formatDate } from "../services/services";
import UserInfo from "./UserInfo";

export default function ChatMessage(props) {
  const { comment } = props;
  const [isIdVisible, setIsIdVisible] = useState(false);

  function handleUserIdClick() {
    setIsIdVisible(!isIdVisible);
  }

  function Message() {
    return (
      <>
        <div className="container-chat-message-name">
          <a
            onClick={handleUserIdClick}
            className="chat-message-name"
            style={{ color: comment.nameColor }}
          >
            {comment.from}
          </a>
          <UserInfo comment={comment} isIdVisible={isIdVisible} />
        </div>
        {comment.text == "" ? (
          <>
            <img
              src={comment.thumbnail}
              className="chat-message-text chat-message-sticker"
            ></img>
            <span className="chat-message-date">
              {formatDate(JSON.stringify(comment.date))}
            </span>
          </>
        ) : (
          <>
            <h5 className="chat-message-text">{comment.text}</h5>
            <span className="chat-message-date">
              {formatDate(JSON.stringify(comment.date))}
            </span>
          </>
        )}
      </>
    );
  }

  return (
    <div className="chat-message">
      <Message />
    </div>
  );
}
