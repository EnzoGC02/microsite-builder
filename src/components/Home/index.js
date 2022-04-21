import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "./ProjectItem";

const HomeComponent = () => {
  const [projectList, setProjectList] = useState([]);
  const accountId = localStorage.getItem("accountId");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects/list/${accountId}`)
      .then((res) => {
        let projList = [];
        res.data.forEach((doc) => {
          projList = [...projList, doc];
        });
        setProjectList(projList);
      });
  }, [accountId]);

  const handleStartProject = (e) => {
    e.preventDefault();
    window.location.replace("/projects/new-project");
  };

  return (
    <>
      <div className="home">
        <div className="section-one">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="mainCard mt-5">
                  <div className="mainCardImgWrap">
                    <img
                      src={require("../../assets/img/launch.png").default}
                      alt=""
                      className="mainCardImg img-fluid"
                    />
                  </div>
                  <div className="mainCardTextWrap">
                    <div className="mainCardTextTitle">
                      <h3>Projects</h3>
                    </div>
                    <div className="mainCardTextCount">
                      <h1>{projectList.length}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mainCard mt-5">
                  <div className="mainCardImgWrap">
                    <img
                      src={require("../../assets/img/html.png").default}
                      alt=""
                      className="mainCardImg img-fluid"
                    />
                  </div>
                  <div className="mainCardTextWrap">
                    <div className="mainCardTextTitle">
                      <h3>Pages</h3>
                    </div>
                    <div className="mainCardTextCount">
                      <h1>0</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-two">
          <div className="container cardsContainer">
            <div className="row">
              {projectList.length > 0 ? (
                projectList.map((item, idx) => (
                  <ProjectItem key={idx} data={item} />
                ))
              ) : (
                <div className="noProjects">
                  <div className="row">
                    <h4>
                      <i className="fa fa-info-circle infoIcon"></i>You do not
                      have any projects yet!
                    </h4>
                    <button
                      className="btn btn-startProject"
                      onClick={handleStartProject}
                    >
                      Start a new Project
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
