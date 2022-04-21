import React from 'react';

const NoPagesComponent = () => {
  return (
    <>
      <div className='noProjects'>
        <div className='row'>
          <h4>
            <i className='fa fa-info-circle infoIcon'></i>You do not have any
            pages yet!
          </h4>
          <button className='btn btn-startProject'>Create a new page</button>
        </div>
      </div>
    </>
  );
};

export default NoPagesComponent;
