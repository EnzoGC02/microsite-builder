import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";
import pluginTabs from "grapesjs-tabs";
import pluginForms from "grapesjs-plugin-forms";
import pluginCustomCode from "grapesjs-custom-code";
import pluginLorySlider from "grapesjs-lory-slider";
import pluginFlexbox from "grapesjs-blocks-flexbox";
import { firestore } from "../Firebase";

const HomeComponent = () => {
  const [pageData, setPageData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const projectId = new URLSearchParams(window.location.search).get(
    "projectId"
  );
  const pageId = new URLSearchParams(window.location.search).get("pageId");
  const accountId = localStorage.getItem("accountId");

  const editor = () =>
    grapesjs.init({
      id: "gjs",
      container: "#grapesjs-react-editor",
      noticeOnUnload: true,
      canvas: {},
      allowScript: 1,
      plugins: [
        "gjs-preset-webpage",
        "gjs-blocks-basic",
        "grapesjs-tabs",
        "grapesjs-custom-code",
        pluginTabs,
        pluginForms,
        pluginCustomCode,
        pluginLorySlider,
        pluginFlexbox,
      ],
      pluginsOpts: {
        "gjs-blocks-basic": {
          blocks: "all",
        },
        "gjs-preset-webpage": {
          exportOpts: {
            filenamePfx: "hc",
            filename: null,
            addExportBtn: 1,
            btnLabel: "Export to ZIP",
          },
        },
        "grapesjs-custom-code": {},
        "grapesjs-tabs": {},
      },
      storageManager: {
        type: "local",
        height: "100vh",
        noticeOnUnload: true,
        contentTypeJson: true,
        fromElement: true,
        showOffsets: 1,
        storageManager: { autoload: 0 },
        params: {},
      },
    });

  useEffect(() => {
    localStorage.removeItem("gjsassets");
    localStorage.removeItem("gjscomponents");
    localStorage.removeItem("gjscss");
    localStorage.removeItem("gjshtml");
    localStorage.removeItem("gjsstyles");
    firestore
      .collection("accounts")
      .doc(accountId)
      .collection("projects")
      .doc(projectId)
      .collection("pages")
      .doc(pageId)
      .get()
      .then((res) => {
        setPageData(res.data());
      });
  }, [accountId, projectId, pageId]);

  useEffect(() => {
    setLoaded(true);
    localStorage.setItem("gjsassets", pageData["gjsassets"]);
    localStorage.setItem("gjscomponents", pageData["gjscomponents"]);
    localStorage.setItem("gjscss", pageData["gjscss"]);
    localStorage.setItem("gjshtml", pageData["gjshtml"]);
    localStorage.setItem("gjsstyles", pageData["gjsstyles"]);
    editor();
  }, [pageData]);

  console.log("rendering editor");

  if (!loaded) {
    return (
      <div className="loader">
        <img src={require("../../assets/img/loader2.gif").default} alt="" />
      </div>
    );
  } else {
    return (
      <>
        <div id="grapesjs-react-editor"></div>
      </>
    );
  }
};

export default HomeComponent;
