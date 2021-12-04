import React from "react";
import "./App.css";
import Main from "./Component/Main/Main";
import Sidebar from "./Component/Sidebar/Sidebar";

export default function App() {
  return (
    <div >
      <div style={{ height: "100vh" }} className="d-none d-lg-block">
        <Sidebar />
      </div>
      <Main />
    </div>
  );
}
