import React from 'react';

const UnauthorizedComponent = () => {
  return (
    <>
      <div className='loginPage'>
        <div className='container'>
          <div className='row'>
            <img
              src={require('../../assets/img/logo.png').default}
              alt=''
              className='logo'
            />
          </div>
          <div className='row'>
            <div className='loader'>
              <img
                src={require('../../assets/img/loader2.gif').default}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnauthorizedComponent;
