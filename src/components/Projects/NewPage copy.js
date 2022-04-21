import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
// import { firestore } from "../Firebase";
import axios from "axios";

const NewPageComponent = () => {
  const [pageTitle, setPageTitle] = useState("");
  const projectId = new URLSearchParams(window.location.search).get(
    "projectId"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      pageTitle: pageTitle,
      author: "Naveen R",
      authorId: "m4W0OiaB7MYBWEwgy1xzivg1",
      projectId: projectId,
      accountId: "5faff3ebffe0713f9ce6c045",
      created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      pageName: "My New Page",
      gjscomponents: [
        {
          content: "",
          classes: [
            {
              name: "panel",
              label: "panel",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          components: [
            {
              tagName: "h1",
              type: "text",
              content: "Welcome to",
              classes: [
                {
                  name: "welcome",
                  label: "welcome",
                  type: 1,
                  active: true,
                  private: false,
                  protected: false,
                },
              ],
            },
            {
              content: "",
              classes: [
                {
                  name: "big-title",
                  label: "big-title",
                  type: 1,
                  active: true,
                  private: false,
                  protected: false,
                },
              ],
              components: [
                {
                  tagName: "svg",
                  type: "svg",
                  content: "",
                  classes: [
                    {
                      name: "logo",
                      label: "logo",
                      type: 1,
                      active: true,
                      private: false,
                      protected: false,
                    },
                  ],
                  attributes: { viewBox: "0 0 100 100" },
                  components: [
                    {
                      tagName: "path",
                      type: "svg-in",
                      content: "",
                      attributes: {
                        d:
                          "M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2",
                      },
                    },
                  ],
                },
                { tagName: "span", type: "text", content: "GrapesJS" },
              ],
            },
            {
              type: "text",
              content:
                "\n          This is a demo content from index.html. For the development, you shouldn't edit this file, instead you can\n          copy and rename it to _index.html, on next server start the new file will be served, and it will be ignored by git.\n        ",
              classes: [
                {
                  name: "description",
                  label: "description",
                  type: 1,
                  active: true,
                  private: false,
                  protected: false,
                },
              ],
            },
          ],
        },
        {
          name: "Row",
          droppable: ".cell",
          resizable: {
            tl: 0,
            tc: 0,
            tr: 0,
            cl: 0,
            cr: 0,
            bl: 0,
            br: 0,
            minDim: 1,
          },
          content: "",
          classes: [
            {
              name: "row",
              label: "row",
              type: 1,
              active: true,
              private: 1,
              protected: false,
            },
          ],
          components: [
            {
              name: "Cell",
              draggable: ".row",
              resizable: {
                tl: 0,
                tc: 0,
                tr: 0,
                cl: 0,
                cr: 1,
                bl: 0,
                br: 0,
                minDim: 1,
                bc: 0,
                currentUnit: 1,
                step: 0.2,
              },
              content: "",
              classes: [
                {
                  name: "cell",
                  label: "cell",
                  type: 1,
                  active: true,
                  private: 1,
                  protected: false,
                },
              ],
            },
            {
              name: "Cell",
              draggable: ".row",
              resizable: {
                tl: 0,
                tc: 0,
                tr: 0,
                cl: 0,
                cr: 1,
                bl: 0,
                br: 0,
                minDim: 1,
                bc: 0,
                currentUnit: 1,
                step: 0.2,
              },
              content: "",
              classes: [
                {
                  name: "cell",
                  label: "cell",
                  type: 1,
                  active: true,
                  private: 1,
                  protected: false,
                },
              ],
            },
            {
              name: "Cell",
              draggable: ".row",
              resizable: {
                tl: 0,
                tc: 0,
                tr: 0,
                cl: 0,
                cr: 1,
                bl: 0,
                br: 0,
                minDim: 1,
                bc: 0,
                currentUnit: 1,
                step: 0.2,
              },
              content: "",
              classes: [
                {
                  name: "cell",
                  label: "cell",
                  type: 1,
                  active: true,
                  private: 1,
                  protected: false,
                },
              ],
            },
          ],
        },
      ],
      gjshtml: `<div class="panel"><h1 class="welcome">Welcome to</h1><div class="big-title"><svg viewBox="0 0 100 100" class="logo"><path d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2"></path></svg><span>GrapesJS</span></div><div class="description">
          This is a demo content from index.html. For the development, you shouldn't edit this file, instead you can
          copy and rename it to _index.html, on next server start the new file will be served, and it will be ignored by git.
        </div></div><div class="row"><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>`,

      gjscss:
        "* { box-sizing: border-box; } body {margin: 0;}.panel{width:90%;max-width:700px;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px;margin-top:150px;margin-right:auto;margin-bottom:0px;margin-left:auto;background-color:rgb(217, 131, 166);box-shadow:rgba(0, 0, 0, 0.25) 0px 3px 10px 0px;color:rgba(255, 255, 255, 0.75);font-style:normal;font-size:16px;font-family:Arial;font-stretch:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;line-height:normal;font-weight:100;}.welcome{text-align:center;font-weight:100;margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.logo{width:70px;height:70px;vertical-align:middle;}.logo path{pointer-events:none;fill:none;stroke-linecap:round;stroke-width:7;stroke:rgb(255, 255, 255);}.big-title{text-align:center;font-size:3.5rem;margin-top:15px;margin-right:0px;margin-bottom:15px;margin-left:0px;}.description{text-align:justify;font-size:1rem;line-height:1.5rem;}.row{display:table;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;width:100%;}.cell{width:8%;display:table-cell;height:75px;}@media (max-width: 768px){.cell{width:100%;display:block;}}",
      gjsassets: [],

      gjsstyles: [
        {
          selectors: [
            {
              name: "panel",
              label: "panel",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: {
            width: "90%",
            "max-width": "700px",
            "border-top-left-radius": "3px",
            "border-top-right-radius": "3px",
            "border-bottom-right-radius": "3px",
            "border-bottom-left-radius": "3px",
            "padding-top": "30px",
            "padding-right": "20px",
            "padding-bottom": "30px",
            "padding-left": "20px",
            "margin-top": "150px",
            "margin-right": "auto",
            "margin-bottom": "0px",
            "margin-left": "auto",
            "background-color": "rgb(217, 131, 166)",
            "box-shadow": "rgba(0, 0, 0, 0.25) 0px 3px 10px 0px",
            color: "rgba(255, 255, 255, 0.75)",
            "font-style": "normal",
            "font-size": "16px",
            "font-family": "Arial",
            "font-stretch": "normal",
            "font-variant-caps": "normal",
            "font-variant-ligatures": "normal",
            "font-variant-numeric": "normal",
            "font-variant-east-asian": "normal",
            "line-height": "normal",
            "font-weight": "100",
          },
        },
        {
          selectors: [
            {
              name: "welcome",
              label: "welcome",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: {
            "text-align": "center",
            "font-weight": "100",
            "margin-top": "0px",
            "margin-right": "0px",
            "margin-bottom": "0px",
            "margin-left": "0px",
          },
        },
        {
          selectors: [
            {
              name: "logo",
              label: "logo",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: {
            width: "70px",
            height: "70px",
            "vertical-align": "middle",
          },
        },
        {
          selectors: [],
          selectorsAdd: ".logo path",
          style: {
            "pointer-events": "none",
            fill: "none",
            "stroke-linecap": "round",
            "stroke-width": "7",
            stroke: "rgb(255, 255, 255)",
          },
        },
        {
          selectors: [
            {
              name: "big-title",
              label: "big-title",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: {
            "text-align": "center",
            "font-size": "3.5rem",
            "margin-top": "15px",
            "margin-right": "0px",
            "margin-bottom": "15px",
            "margin-left": "0px",
          },
        },
        {
          selectors: [
            {
              name: "description",
              label: "description",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: {
            "text-align": "justify",
            "font-size": "1rem",
            "line-height": "1.5rem",
          },
        },
        {
          selectors: [
            {
              name: "row",
              label: "row",
              type: 1,
              active: true,
              private: 1,
              protected: false,
            },
          ],
          style: {
            display: "table",
            "padding-top": "10px",
            "padding-right": "10px",
            "padding-bottom": "10px",
            "padding-left": "10px",
            width: "100%",
          },
        },
        {
          selectors: [
            {
              name: "cell",
              label: "cell",
              type: 1,
              active: true,
              private: 1,
              protected: false,
            },
          ],
          style: { width: "100%", display: "block" },
          mediaText: "(max-width: 768px)",
          atRuleType: "media",
        },
        {
          selectors: [
            {
              name: "cell30",
              label: "cell30",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: { width: "100%", display: "block" },
          mediaText: "(max-width: 768px)",
          atRuleType: "media",
        },
        {
          selectors: [
            {
              name: "cell70",
              label: "cell70",
              type: 1,
              active: true,
              private: false,
              protected: false,
            },
          ],
          style: { width: "100%", display: "block" },
          mediaText: "(max-width: 768px)",
          atRuleType: "media",
        },
        {
          selectors: [
            {
              name: "cell",
              label: "cell",
              type: 1,
              active: true,
              private: 1,
              protected: false,
            },
          ],
          style: { width: "8%", display: "table-cell", height: "75px" },
        },
      ],
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // firestore
    //   .collection("accounts")
    //   .doc(localStorage.getItem("accountId"))
    //   .collection("projects")
    //   .doc(projectId)
    //   .collection("pages")
    //   .add(obj)
    //   .then((res) => {
    //     window.location.href =
    //       window.location.origin +
    //       "/project/builder/page?projectId=" +
    //       projectId +
    //       "&pageId=" +
    //       res.id;
    //   });
  };

  return (
    <>
      <div className="project">
        <div className="container">
          <div className="row">
            <h4>Create a Page</h4>
          </div>
          <div className="row justify-content-around">
            <Form className="createProject" onSubmit={handleSubmit}>
              <Form.Group controlId="projName">
                <Form.Control
                  type="text"
                  placeholder="Page Title"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPageComponent;
