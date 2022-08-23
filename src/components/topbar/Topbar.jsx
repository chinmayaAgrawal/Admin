import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import User from "../../pages/user/User";
import { issueRows,notifyRows } from "../../dummyData";
import QnA from "../qna/QnA";
import { useState } from "react";

export default function Topbar() {
  let countNotify=0;
  let countIssue=0;

  const [dat, setDat] = useState(notifyRows);
    notifyRows.map((item) => {
       countNotify =countNotify+1;
   })
  
  const [data, setData] = useState(issueRows);
  issueRows.map((item) => {
    
      countIssue =countIssue+1;
    
  })
  


  return (
    <div className="topbar">
     
      <div className="topbarWrapper">
        <div className="topLeft">
          <span  className="logo" >QNA_Admin 1.0</span>
       
        </div>
        <div className="topRight">
        <Link to="/QnA" className="link" >
          <div className="topbarIconContainer">
            <button class="test" >TEST <  QnA/> </button>
          </div>
          </Link>
        <Link to="/notifications" className="link" >
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">{countNotify}</span>
          </div>
          </Link>
          <Link to="/issue" className="link" >
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">{countIssue}</span>
          </div>
          </Link>
          <Link to="/user" className="link" >
          <div className="topbarIconContainer">
            <Settings />
          </div>
          </Link>
          <Link to="/user" className="link" >
          <div className="topbarIconContainer">
          <img src="https://ej2.syncfusion.com/demos/src/grid/images/2.png" alt="" className="topAvatar" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
