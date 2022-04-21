import React, { useState, useEffect } from "react";
import AdminLayout from "../../../ui/AdminLayout";
import axios from "axios";

const ManageAccountComponent = () => {
  const accountId = new URLSearchParams(window.location.search).get(
    "accountId"
  );
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/accounts/" + accountId).then((res) => {
      setAccountData(res.data);
    });
  }, [accountId]);

  return (
    <>
      <AdminLayout>
        <div className="addAccountsRow">
          <h4 className="accountsTitle">
            Manage Account - {accountData.companyName}
          </h4>
        </div>
      </AdminLayout>
    </>
  );
};

export default ManageAccountComponent;
