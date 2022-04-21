import React from 'react';
import AdminHeader from '../components/Admin/Header';
import AdminSideMenu from '../components/Admin/SideMenu';
const AdminLayout = ({ children }) => {
  return (
    <>
      <div className='admin'>
        <AdminHeader />
        <div className='mainContent'>
          <AdminSideMenu />
          <div className='mainContainer'>
            <div className='container'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
