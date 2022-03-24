import React, { useState } from "react";
import { getRandomIntInclusive } from "../services/services";
import ChatMessage from "./ChatMessage";

export default function PickWinner(props) {
  const { comments, addWinnerToList, removeWinnerFromPool, listOfWinners } = props;
  const [winnerComment, setWinnerComment] = useState(
    listOfWinners[listOfWinners.length - 1]
  );
  
  async function handlePickWinner() {
    if(comments.length == 0) {
      return;
    }

    let newWinner = await comments[getRandomIntInclusive(0, comments.length - 1)];
    setWinnerComment(newWinner);
    addWinnerToList(newWinner);
    removeWinnerFromPool(newWinner);
  }

  function MessagePlaceholder() {
    return (
      <>
        <div className="chat-message">
          <h5>
            Здесь появится сообщение победителя. Нажмите кнопку, чтобы начать.
          </h5>
        </div>
      </>
    );
  }

  return (
    <div className="pick-winner-container container-element tools">
      <button onClick={handlePickWinner} className="btn-pick-winner">
        ВЫБРАТЬ
      </button>
      {winnerComment == null ? (
        <MessagePlaceholder />
      ) : (
        <ChatMessage comment={winnerComment} />
      )}
    </div>
  );
}
