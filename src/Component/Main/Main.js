import React from "react";
import MainHistory from "../MainHistory/MainHistory";
import MainPolls from "../MainPolls/MainPolls";
import Navigationbar from "../Navigationbar/Navigationbar";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="main__bg">
        <Navigationbar />
        <MainPolls />
        <MainHistory />
      </div>
    </div>
  );
}
