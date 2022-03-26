import React from "react";
import ChatMessage from "./ChatMessage";
import catImg from "../images/cat-sleeping.png";

export default function WinnersList(props) {
  const { listOfWinners } = props;

  function ListOfWinners() {
    return (
      <>
        <h3>Победители</h3>
        <ul className="winners-list">
          {listOfWinners.map((comment) => (
            <ChatMessage
              key={comment.from_id}
              comment={comment}
            />
          ))}
        </ul>
      </>
    );
  }

  function ListOfWinnersPlaceholder() {
    return (
      <>
        <h4>Пока ещё никто не выиграл :(</h4>
        <img src={catImg} className="img-cat"></img>
      </>
    );
  }

  return (
    <div className="container-element tools">
      {listOfWinners.length >= 1 ? (
        <ListOfWinners />
      ) : (
        <ListOfWinnersPlaceholder />
      )}
    </div>
  );
}
