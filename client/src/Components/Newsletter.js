import { Send } from "@mui/icons-material";
import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletterContainer">
      <h1 className="newsletterTitle">Newsletter</h1>
      <p className="newsletterDescription">
        Get updates about latest products and trends from MoKart
      </p>
      <div className="newsletterInputContainer">
        <input className="newsletterInout" placeholder="your emial" />
        <button className="newsletterButton">
          <Send />
        </button>
      </div>
    </div>
  );
}
