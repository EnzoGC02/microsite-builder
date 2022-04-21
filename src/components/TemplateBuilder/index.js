import React, { useEffect } from "react";
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

const TemplateBuilder = () => {
  const editor = () =>
    grapesjs.init({
      container: "#grapesjs-react-editor",
      noticeOnUnload: true,
      canvas: {},
      allowScript: 1,
      plugins: [
        "gjs-preset-webpage",
        "gjs-blocks-basic",
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
    });

  useEffect(() => {
    editor();
  }, []);

  return (
    <>
      <div id="grapesjs-react-editor"></div>
    </>
  );
};

export default TemplateBuilder;
