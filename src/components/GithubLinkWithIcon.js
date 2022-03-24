import React from "react";
import "../App.css";
import { makeStyles, Link } from "@material-ui/core";
import gitLogo from "../images/github-icon.png";

const useStyles = makeStyles((theme) => ({
  gitLinkStyle: {
    fontFamily: "inherit",
    color: "#ffffff",
    letterSpacing: "1.5px",
    fontSize: "0.8rem",
    fontWeight: "600",
    transitionDuration: 0,
    margin: "10px",
    "&:hover": {
      filter:
      "invert(48%) sepia(13%) saturate(3207%) hue-rotate(170deg) brightness(100%) contrast(90%)",
    },
  },
  gitLogoStyle: {
    width: "30px",
    height: "30px",
  },
}));

export default function GithubLinkWithIcon() {
  const classes = useStyles();
  const gitUrl = "https://github.com/aleksns";

  const openInNewTab = () => {
    const newWindow = window.open(gitUrl, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container-git-link"
    >
      <Link
        className={classes.gitLinkStyle}
        component="button"
        underline="none"
        onClick={openInNewTab}
      >
        <img src={gitLogo} className={classes.gitLogoStyle}></img>Github: Aleksns
      </Link>
    </div>
  );
}