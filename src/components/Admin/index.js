import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../../ui/AdminLayout";
import AccountListItem from "./Accounts/AccountListItem";

const AdminComponent = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    async function getData() {
      axios.get("http://localhost:5000/accounts").then((res) => {
        let accList = [];
        res.data.forEach((item) => {
          accList = [...accList, item];
        });
        setAccountList(accList);
      });
    }
    getData();
  }, []);

  const handleCompanyId = (id) => {
    window.location.replace(
      "/admin/account/manage-account/account?accountId=" + id
    );
  };

  return (
    <>
      <AdminLayout>
        <div className="row statsRow">
          <div className="col-3 statsWrap">
            <div className="statsContainer">
              <h6>Accounts</h6>
              <div className="stats">
                <h1>{accountList.length}</h1>
              </div>
            </div>
          </div>
          <div className="col-3 statsWrap">
            <div className="statsContainer">
              <h6>Users</h6>
              <div className="stats">
                <h1>5</h1>
              </div>
            </div>
          </div>
          <div className="col-3 statsWrap">
            <div className="statsContainer">
              <h6>Projects</h6>
              <div className="stats">
                <h1>1</h1>
              </div>
            </div>
          </div>
          <div className="col-3 statsWrap">
            <div className="statsContainer">
              <h6>Pages</h6>
              <div className="stats">
                <h1>3</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row accountsRow">
          <h4 className="accountsTitle">Accounts</h4>
          <div className="row accountsList">
            {accountList.map((item, idx) => (
              <AccountListItem
                key={idx}
                id={item._id}
                companyName={item.companyName}
                handleCompanyId={handleCompanyId}
              />
            ))}
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminComponent;
