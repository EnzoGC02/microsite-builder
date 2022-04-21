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
import axios from "axios";

const HomeComponent = () => {
  const [pageData, setPageData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const pageId = new URLSearchParams(window.location.search).get("pageId");

  const editor = () =>
    grapesjs.init({
      container: "#grapesjs-react-editor",
      noticeOnUnload: true,
      canvas: {},
      allowScript: 1,
      plugins: [
        "gjs-preset-webpage",
        pluginTabs,
        pluginForms,
        pluginCustomCode,
        pluginLorySlider,
        pluginFlexbox,
      ],
      pluginsOpts: {
        "gjs-preset-webpage": {},
        "grapesjs-custom-code": {},
        "grapesjs-tabs": {},
      },
      storageManager: {
        id: "gjs",
        type: "local",
        height: "100vh",
        noticeOnUnload: true,
        contentTypeJson: true,
        fromElement: true,
        showOffsets: 1,
        storageManager: { autoload: 0 },
        params: {},
      },
      styleManager: {},
    });

  useEffect(() => {
    localStorage.removeItem("gjsassets");
    localStorage.removeItem("gjscomponents");
    localStorage.removeItem("gjscss");
    localStorage.removeItem("gjshtml");
    localStorage.removeItem("gjsstyles");
    axios.get("http://localhost:5000/pages/" + pageId).then((res) => {
      setPageData(res.data);
    });
  }, [pageId]);

  useEffect(() => {
    setLoaded(true);
    localStorage.setItem("gjsassets", pageData.gjsassets);
    localStorage.setItem("gjscomponents", pageData.gjscomponents);
    localStorage.setItem("gjscss", pageData.gjscss);
    localStorage.setItem("gjshtml", pageData.gjshtml);
    localStorage.setItem("gjsstyles", pageData.gjsstyles);
    editor();
  }, [pageData]);

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
