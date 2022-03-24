import React from "react";
import { formatUserID } from "../services/services";

export default function UserInfo(props) {
  const { comment, isIdVisible } = props;

  return (
    <div className="chat-message-user-info" style={isIdVisible? {display: "block"} : {display: "none"}}>
        <p>ID: {formatUserID(comment.from_id)}</p>
    </div>
  );
}
