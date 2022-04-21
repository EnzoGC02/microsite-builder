import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import TemplateItem from "./TemplateItem";
import axios from "axios";

const NewPageComponent = () => {
  const [pageTitle, setPageTitle] = useState("");
  const projectId = new URLSearchParams(window.location.search).get(
    "projectId"
  );
  const [template, setTemplate] = useState([]);
  const [templateList, setTemplateList] = useState([]);
  const [classes, setClasses] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/templates/gettemplates").then((res) => {
      setTemplateList(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      pageTitle: pageTitle,
      author: "Naveen R",
      authorId: "m4W0OiaB7MYBWEwgy1xzivg1",
      projectId: projectId,
      accountId: "5faff3ebffe0713f9ce6c045",
      created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      gjsassets: template.gjsassets,
      gjscomponents: template.gjscomponents,
      gjscss: template.gjscss,
      gjshtml: template.gjshtml,
      gjsstyles: template.gjsstyles,
    };
    axios({
      method: "post",
      url: "http://localhost:5000/pages/add",
      data: obj,
      header: {
        "Content-Type": "application / json",
      },
    })
      .then((res) => {
        window.location.href =
          window.location.origin +
          "/project/builder/page?projectId=" +
          projectId +
          "&pageId=" +
          res.data._id;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectTemplate = (id) => {
    axios.get("http://localhost:5000/templates/" + id).then((res) => {
      setTemplate(res.data);
      setClasses("");
    });
  };

  return (
    <>
      <div className="project">
        <div className="container">
          <div className="row">
            <h4>Create a Page</h4>
          </div>
          <Form className="createProject" onSubmit={handleSubmit}>
            <div className="row justify-content-around">
              <Form.Group controlId="projName">
                <Form.Control
                  type="text"
                  placeholder="Page Title"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="row">
              <div className="col-12">
                <h5>Choose Initial Template</h5>
              </div>
              {templateList.map((item, idx) => (
                <TemplateItem
                  key={idx}
                  data={item}
                  handleSelectTemplate={handleSelectTemplate}
                  classes={classes}
                />
              ))}
            </div>
            <div className="row">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewPageComponent;
