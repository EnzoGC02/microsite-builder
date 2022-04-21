import React from 'react';

const AccountListItem = ({ id, companyName, handleCompanyId }) => {
  const handleClick = () => {
    return handleCompanyId(id);
  };
  return (
    <>
      <div className='cnWrap' onClick={handleClick}>
        <span className='cName'>{companyName}</span>
      </div>
    </>
  );
};

export default AccountListItem;
