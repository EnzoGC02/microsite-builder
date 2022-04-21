import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProfileTab from './ProfileTab';
import ChangePassword from './ChangePassword';
import Peers from './Peers';

const ProfileComponent = () => {
  return (
    <>
      <div className='profile'>
        <div className='container mt-5'>
          <Tabs defaultActiveKey='profile' id='profileTabs'>
            <Tab eventKey='profile' title='Profile'>
              <ProfileTab />
            </Tab>
            <Tab eventKey='security' title='Security'>
              <ChangePassword />
            </Tab>
            <Tab eventKey='peers' title='Peers'>
              <Peers />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
