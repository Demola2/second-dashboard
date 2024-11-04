import React, { useState } from "react";
import ademola from "../images/ademola.jpg";
import {
  Speed,
  Computer,
  ContentCopy,
  Redeem,
  Checkroom,
  Build,
  Report,
  SportsSoccer,
} from "@mui/icons-material";

const Sidebar = () => {
  const [shows, setshow] = useState("dashboard");

  return (
    <div className="sidebar_container">
      <div className="sidebar_title">
        <img className="sidebar_image" src={ademola} alt="" />
        <p className="sidebar_text">Streamline3</p>
      </div>
      <div className="sidebar_buttons">
        <h3 className="button_title">Navigation</h3>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "dashbaord" ? "key" : ""}`}
            onClick={() => {
              setshow("dashbaord");
            }}
          >
            <Speed />
            DASHBOARD
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "websites" ? "key" : ""}`}
            onClick={() => {
              setshow("websites");
            }}
          >
            <Computer />
            WEB STIES
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "devices" ? "key" : ""}`}
            onClick={() => {
              setshow("devices");
            }}
          >
            <ContentCopy />
            DEVICES
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "users" ? "key" : ""}`}
            onClick={() => {
              setshow("users");
            }}
          >
            <Redeem />
            USERS
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "snapshot" ? "key" : ""}`}
            onClick={() => {
              setshow("snapshot");
            }}
          >
            <Checkroom />
            SNAPSHOTS
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "settings" ? "key" : ""}`}
            onClick={() => {
              setshow("settings");
            }}
          >
            <Build />
            SETTINGS
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "reports" ? "key" : ""}`}
            onClick={() => {
              setshow("reports");
            }}
          >
            <Report />
            REPORTS
          </button>
        </div>

        <div className="side_btn">
          <button
            className={`sidebar_btn ${shows === "help" ? "key" : ""}`}
            onClick={() => {
              setshow("help");
            }}
          >
            <SportsSoccer />
            HELP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
