import React from "react";
import PickWinner from "../components/PickWinner";
import WinnersList from "../components/WinnersList";

export default function MainScreen(props) {
  const { comments, listOfWinners, addWinnerToList, removeWinnerFromPool } = props;
  return (
      <>
      <div className="img-background"></div>
      <PickWinner
        comments={comments}
        listOfWinners={listOfWinners}
        addWinnerToList={addWinnerToList}
        removeWinnerFromPool={removeWinnerFromPool}
      />
      <WinnersList listOfWinners={listOfWinners} />
      </>
  );
}
