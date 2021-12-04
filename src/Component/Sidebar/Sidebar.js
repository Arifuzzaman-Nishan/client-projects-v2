import React, { useState } from "react";
import discord from "../../images/discord";
import gmail from "../../images/gmail";
import logo from "../../images/logo";
import telegram from "../../images/telegram";
import twitter from "../../images/twitter";
import "./Sidebar.css";
import sidebarData from "./sidebarData";

// for footer icon
const footerIcon = [twitter, discord, gmail, telegram];

export default function Sidebar() {
  // for selected bg color state
  const [background, setBackground] = useState("Trade");

  const handleBackground = (item) => {
    setBackground(item);
  };

  return (
    <>
      <div className="sideBar" style={{ width: "256px" }}>
        <div className="menu-icon">
          <div className="text-center">
            <img style={{ width: "13rem" }} src={logo} alt="" />
          </div>
        </div>
        <div>
          <ul className="list-item">
            {sidebarData.map((item, index) =>
              background === item.title ? (
                <li
                  key={index}
                  className="text-white list-design p-2 mb-3 list-background-color"
                  onClick={() => handleBackground(item.title)}
                >
                  <img className="ms-2 icon-width" src={item.icon} alt="" />
                  <span className="ms-2">{item.title}</span>
                </li>
              ) : (
                <li
                  key={index}
                  className="text-white list-design pb-2 mb-3"
                  onClick={() => handleBackground(item.title)}
                >
                  <img className="ms-3 icon-width" src={item.icon} alt="" />
                  <span className="ms-2">{item.title}</span>
                </li>
              )
            )}
          </ul>
        </div>
        <footer>
          <div
            style={{ height: "15vh" }}
            className="d-flex align-items-end justify-content-center"
          >
            <button className="btn wallet">Connect Wallet</button>
          </div>

          <div className="mt-5  d-flex justify-content-around ">
            {footerIcon.map((item, index) => (
              <img
                key={index}
                className=""
                style={{ width: "1.7rem" }}
                src={item}
                alt=""
              />
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
