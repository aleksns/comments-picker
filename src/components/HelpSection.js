import React from "react";
import GithubLinkWithIcon from "./GithubLinkWithIcon";

export default function HelpSection() {
  const urlMathFormula = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random";


  const openInNewTab = () => {
    const newWindow = window.open(urlMathFormula, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container-element tools">
      <div className="img-background"></div>
      <div className="container-help">
        <h3 style={{ color: "#69B2FB" }}>
         How Does The Program Pick a Winner?
        </h3>
        <p className="p-text-help">
        1. Before starting the program, comments are sorted
          by unique "user_id" value to even the odds and
           leave 1 comment per 1 person.
        </p>
        <p className="p-text-help">
        2. When you click the "Generate" button, a winner is generated
           according to the standard formula, based on
          "Math.random" Formula
           selects a random value in the specified range of numbers, including min and
           max values, more details{" "}
          {
            <a
              onClick={openInNewTab}
              style={{ color: "#459ef8", textDecoration: "underline", cursor: "pointer" }}
            >
              HERE
            </a>
          }
          . Based on the received random number, a comment is selected from the
           list.
        </p>
        <p className="p-text-help">
        3. Once a winning comment has been selected, it is removed from
           the array of comments-participants
        </p>    
        <p className="p-text-help">
          4. Press on a participants name to see their unique ID</p>
        <p style={{color: "#BDC3C7", fontWeight: "normal"}}><em>Current database of comments is generated with mockaroo.com</em> </p>
      </div>
      <GithubLinkWithIcon />
    </div>
  );
}
