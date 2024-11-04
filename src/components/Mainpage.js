import React from "react";
import oreoluwa from "../images/oreoluwa.png";
import {
  List,
  Search,
  CheckBox,
  CircleNotifications,
  ExpandMore,
  Person3,
  ReportProblem,
  AutoStories,
} from "@mui/icons-material";

const Mainpage = () => {
  const Items = [
    {
      number: "23",
      description: "REQUEST WEB SITES",
    },
    {
      number: "17",
      description: "REQUEST MEDIA",
    },
    {
      number: "45",
      description: "DEVICES",
    },
    {
      number: "27",
      description: "DEVICE ALERT",
    },
  ];

  return (
    <div className="mainpage_container">
      <div className="mainpage_header">
        <div className="mainpage_search">
          <List />
          <div className="search_input">
            <input type="text" placeholder="Company" />
            <Search />
          </div>
        </div>
        <div className="mainpage_admin">
          <CheckBox className="icon" />
          <CircleNotifications />
          <div className="admin_username">
            <div>
              <h3 className="username">
                Oreoluwa Morenikeji
                <ExpandMore />
              </h3>
              <p className="ranks">Administration</p>
            </div>
            <img className="mainpage_image" src={oreoluwa} alt="" />
          </div>
        </div>
      </div>

      <div className="header_title">
        <h1>DASHBOARD</h1>
        <div className="title_icons">
          <div className="active_user">
            <Person3 />
            <p>
              <span>15 Users</span>
            </p>
          </div>
          <div className="active_user caution">
            <ReportProblem />
            <p>
              <span>6 Users Alerts</span>
            </p>
          </div>
          <div>
            <select className="selectors">
              <option>Company Name</option>
            </select>
          </div>
        </div>
      </div>

      <div className="box_house">
        {Items.map((item, index) => (
          <div className="box_one" key={index}>
            <h1 className="box_number">{item.number}</h1>
            <p className="box_description">
              <span>{item.description}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="table_container">
        <div className="table_head">
          <button className="table_text">
            <AutoStories />
            LATEST WEB DESIGN
          </button>
          <button className="table_text">
            <AutoStories />
            LATEST MEDIAS
          </button>
        </div>
        <table>
          <thead className="header_table">
            <tr>
              <th>#</th>
              <th>Websites</th>
              <th>Status</th>
              <th>Users</th>
            </tr>
          </thead>
          <tbody className="body_data">
            <tr>
              <td>
                <h4>452</h4>
              </td>
              <td>
                <h4>www.apple.com</h4>
              </td>
              <td>
                <button className="allowedBtn">Allowed</button>
              </td>
              <td>
                <h4>David Green</h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>327</h4>
              </td>
              <td>
                <h4>www.sun.com</h4>
              </td>
              <td>
                <button className="allowedBtn">Allowed</button>
              </td>
              <td>
                <h4>Sandra Smith</h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>226</h4>
              </td>
              <td>
                <h4>www.goggle.com</h4>
              </td>
              <td>
                <button className="blockedBtn">Blocked</button>
              </td>
              <td>
                <h4>Christopher Palmer</h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>178</h4>
              </td>
              <td>
                <h4>www.yahoo.com</h4>
              </td>
              <td>
                <button className="blockedBtn">Blocked</button>
              </td>
              <td>
                <h4>Amily Lee</h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>157</h4>
              </td>
              <td>
                <h4>www.microsoft.com</h4>
              </td>
              <td>
                <button className="allowedBtn">Allowed</button>
              </td>
              <td>
                <h4>Nick Doe</h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4>157</h4>
              </td>
              <td>
                <h4>www.apple.com</h4>
              </td>
              <td>
                <button className="allowedBtn">Allowed</button>
              </td>
              <td>
                <h4>David Green</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mainpage;
