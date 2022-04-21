import React, { useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';
import { firestore } from '../Firebase';

const BuilderComponent = () => {
  const projectId = new URLSearchParams(window.location.search).get(
    'projectId'
  );
  const pageId = new URLSearchParams(window.location.search).get('pageId');
  const accountId = localStorage.getItem('accountId');

  console.log(accountId, projectId, pageId);

  const editor = grapesjs.init({
    container: '#gjs',
    fromElement: true,
    plugins: ['gjs-preset-webpage', 'gjs-blocks-basic'],
    pluginsOpts: {
      'gjs-blocks-basic': {},
      'gjs-preset-webpage': {},
      'grapesjs-tabs': {},
    },
    storageManager: {
      type: 'local',
    },
  });

  useState(() => {
    firestore
      .collection('accounts')
      .doc(accountId)
      .collection('projects')
      .doc(projectId)
      .collection('pages')
      .doc(pageId)
      .get()
      .then((res) => {
        console.log(res.data());
        localStorage.setItem('gjs-assets', res.data()['gjs-assets']);
        localStorage.setItem('gjs-components', res.data()['gjs-components']);
        localStorage.setItem('gjs-css', res.data()['gjs-css']);
        localStorage.setItem('gjs-html', res.data()['gjs-html']);
        localStorage.setItem('gjs-styles', res.data()['gjs-styles']);
      });
    editor.render();
  }, []);

  return (
    <>
      <div id='gjs'></div>
    </>
  );
};

export default BuilderComponent;
