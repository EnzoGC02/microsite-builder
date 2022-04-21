import React from "react";
import Logo from "../../assets/img/logo.png";
import { auth } from "../Firebase";
import { AiOutlineSave } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { CgArrowLeft } from "react-icons/cg";
import axios from "axios";

const HeaderComponent = () => {
  const projectId = new URLSearchParams(window.location.search).get(
    "projectId"
  );
  const pageId = new URLSearchParams(window.location.search).get("pageId");
  const name =
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  const handleLogout = (e) => {
    e.preventDefault();
    auth.signOut();
    localStorage.clear();
    window.location.replace("/");
  };
  const handleSave = (e) => {
    e.preventDefault();
    let obj = {
      gjshtml: localStorage.getItem("gjshtml"),
      gjscomponents: localStorage.getItem("gjscomponents"),
      gjsassets: localStorage.getItem("gjsassets"),
      gjscss: localStorage.getItem("gjscss"),
      gjsstyles: localStorage.getItem("gjsstyles"),
    };
    console.log(obj);
    axios.post(`http://localhost:5000/pages/save/${pageId}`, obj);
  };

  return (
    <>
      <div className="header">
        <div className="logoWrap">
          <a href="/home" className="menuItem">
            <img src={Logo} alt="" className="logo" />
          </a>
        </div>
        <div className="leftMenuWrap">
          <a className="saveBtn" href="/home">
            <GoHome size={16} className="saveIcon" /> <span>Go Home</span>
          </a>
          <a
            className="saveBtn"
            href={"/project/project?projectId=" + projectId}
          >
            <CgArrowLeft size={16} className="saveIcon" /> <span>Go Back</span>
          </a>
          <button className="saveBtn" onClick={handleSave}>
            <AiOutlineSave size={16} className="saveIcon" /> <span>Save</span>
          </button>
        </div>
        <div className="rightMenuWrap">
          <a href="/profile" style={{ color: "#656565" }} title="Profile">
            {name}
          </a>
          <span
            onClick={handleLogout}
            className="btn-logout"
            title="Logout"
            style={{ cursor: "pointer" }}
          >
            <i className="fa fa-sign-out"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
