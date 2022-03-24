import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Comments from "./components/Comments";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import MainScreen from "./routes/MainScreen";
import { listOfComments } from "./services/.dbComments";
import { getColors, getRandomIntInclusive } from "./services/services";

export default function App() {
  const [comments, setComments] = useState([]);
  const [listOfWinners, setListOfWinners] = useState([]);
  const [numOfParticipants, setNumOfParticipants] = useState(0);

  function addWinnerToList(winner) {
    listOfWinners.push(winner);
    setListOfWinners([...listOfWinners]);
  }

  function removeWinnerFromPool(winner) {
    let index = comments.indexOf(winner);
    comments.splice(index, 1);

    updateComments(comments);
  }

  function initComments() {
    var arr = [];
    arr = listOfComments;

    arr = arr.filter(
      (arr, index, self) =>
        index ===
        self.findIndex((t) => t.from_id === arr.from_id && t.type === "message")
    );

    for (let i = 0; i < arr.length; i++) {
      arr[i].nameColor = "";
      assignRandomColorToObject(arr[i]);
      //formatMediaLocation(arr[i]);
    }

    updateComments(arr);
  }

  function assignRandomColorToObject(object) {
    object.nameColor =
      getColors[getRandomIntInclusive(0, getColors.length - 1)];
  }

  // function formatMediaLocation(object) {
  //   if (object.thumbnail) {
  //     object.thumbnail = "/" + object.thumbnail;
  //   }
  // }

  function updateComments(arr) {
    setComments([...arr]);
    setNumOfParticipants(arr.length);
  }

  useEffect(() => {}, [comments]);

  useEffect(() => {
    window.onscroll = () => {
      handleStickyClass();
    };

    var header = document.getElementById("appHeader");
    var sticky = header.offsetTop;

    function handleStickyClass() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    initComments();
  }, []);

  return (
    <>
      <Header numOfParticipants={numOfParticipants} />
      <div className="main-container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainScreen
                comments={comments}
                listOfWinners={listOfWinners}
                addWinnerToList={addWinnerToList}
                removeWinnerFromPool={removeWinnerFromPool}
              />
            }
          />
          <Route path="/help" element={<HelpSection />} />
          <Route path="/comments" element={<Comments comments={comments} />} />
        </Routes>
      </div>
    </>
  );
}
