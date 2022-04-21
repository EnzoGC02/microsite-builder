import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideMenuComponent = () => {
  return (
    <>
      <div className='sideMenu'>
        <ul>
          <li>
            <span>Accounts</span>
            <ul>
              <Link to='/admin/account/add-account'>
                <li>Add Account</li>
              </Link>
              <li>Manage Accounts</li>
            </ul>
          </li>
          <li>
            <span>User Manager</span>
          </li>
          <li>
            <span>Something</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSideMenuComponent;
