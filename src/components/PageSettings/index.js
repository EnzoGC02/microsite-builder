import React, { useEffect, useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PageDetails from './PageDetails';
import SeoSettings from './SeoSettings';
import MicroBotSettings from './MicroBotSettings';
import CustomCode from './CustomCode';
import { firestore } from '../Firebase';

const PageSettingsComponent = () => {
  const accountId = new URLSearchParams(window.location.search).get(
    'accountId'
  );
  const projectId = new URLSearchParams(window.location.search).get(
    'projectId'
  );
  const pageId = new URLSearchParams(window.location.search).get('pageId');
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    console.log(accountId, projectId, pageId);
    firestore
      .collection('accounts')
      .doc(accountId)
      .collection('projects')
      .doc(projectId)
      .collection('pages')
      .doc(pageId)
      .get()
      .then((res) => {
        setPageData(res.data());
      });
  }, [accountId, projectId, pageId]);

  return (
    <>
      <div className='settings'>
        <div className='container mt-5'>
          <div className='row'>
            <Tabs defaultActiveKey='pageDetails' id='pageSettingTabsContainer'>
              <Tab eventKey='pageDetails' title='Page Details'>
                <div>
                  <PageDetails data={pageData} />
                </div>
              </Tab>
              <Tab eventKey='seo' title='SEO'>
                <div>
                  <SeoSettings />
                </div>
              </Tab>
              <Tab eventKey='microbot' title='MicroBot Settings'>
                <div>
                  <MicroBotSettings />
                </div>
              </Tab>
              <Tab eventKey='code' title='Code'>
                <div>
                  <CustomCode />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSettingsComponent;
