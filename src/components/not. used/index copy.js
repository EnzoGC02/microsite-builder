import React from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';
import pluginTabs from 'grapesjs-tabs';
import pluginForms from 'grapesjs-plugin-forms';
import pluginCustomCode from 'grapesjs-custom-code';
import { firestore } from '../Firebase';

const projectId = new URLSearchParams(window.location.search).get('projectId');
const pageId = new URLSearchParams(window.location.search).get('pageId');
const accountId = localStorage.getItem('accountId');

const editor = () =>
  grapesjs.init({
    container: '#grapesjs-react-editor',
    noticeOnUnload: true,
    canvas: {},
    allowScript: 1,
    plugins: [
      'gjs-preset-webpage',
      'gjs-blocks-basic',
      'grapesjs-tabs',
      'grapesjs-custom-code',
      pluginTabs,
      pluginForms,
      pluginCustomCode,
    ],
    pluginsOpts: {
      'gjs-blocks-basic': {
        blocks: 'all',
      },
      'gjs-preset-webpage': {
        exportOpts: {
          filenamePfx: 'hc',
          filename: null,
          addExportBtn: 1,
          btnLabel: 'Export to ZIP',
        },
      },
      'grapesjs-custom-code': {},
      'grapesjs-tabs': {},
    },
    storageManager: {
      type: 'local',
      height: '100vh',
      noticeOnUnload: true,
      contentTypeJson: true,
      fromElement: true,
      showOffsets: 1,
      storageManager: { autoload: 0 },
      params: {},
    },
  });

class HomeComponent extends React.Component {
  componentDidMount() {
    firestore
      .collection('accounts')
      .doc(accountId)
      .collection('projects')
      .doc(projectId)
      .collection('pages')
      .doc(pageId)
      .get()
      .then((res) => {
        localStorage.removeItem('gjs-assets');
        localStorage.removeItem('gjs-components');
        localStorage.removeItem('gjs-css');
        localStorage.removeItem('gjs-html');
        localStorage.removeItem('gjs-styles');
        localStorage.setItem('gjs-assets', res.data()['gjs-assets']);
        localStorage.setItem('gjs-components', res.data()['gjs-components']);
        localStorage.setItem('gjs-css', res.data()['gjs-css']);
        localStorage.setItem('gjs-html', res.data()['gjs-html']);
        localStorage.setItem('gjs-styles', res.data()['gjs-styles']);
      });
          editor();
  }

  componentWillUnmount() {
    editor('destroy');
  }
  render() {
    console.log('rendering editor');
    return (
      <>
        <div id='grapesjs-react-editor'></div>
      </>
    );
  }
}

export default HomeComponent;
