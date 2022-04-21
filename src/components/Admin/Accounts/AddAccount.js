import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AdminLayout from "../../../ui/AdminLayout";

const AddAccountComponent = () => {
  const [companyName, setCompanyName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressPinCode, setAddressPinCode] = useState("");

  const handleAddAccount = (e) => {
    e.preventDefault();
    var obj = {
      companyName,
      addressLine1,
      addressLine2,
      addressState,
      addressCity,
      addressPinCode,
    };

    axios({
      method: "post",
      url: "http://localhost:5000/accounts/add",
      data: obj,
    })
      .then(() => {
        Swal.fire({
          title: "Done",
          text: "Account Was Added",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.replace("/admin");
          }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminLayout>
        <div className="addAccountsRow">
          <h4 className="accountsTitle">Add Account</h4>
        </div>
        <div className="addAccountsRow">
          <div className="addAccountsFormWrap">
            <form className="addAccountForm" onSubmit={handleAddAccount}>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  className="form-control addAccountsInput"
                  id="companyName"
                  name="companyName"
                  aria-describedby="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  className="form-control addAccountsInput"
                  id="addressLine1"
                  name="addressLine1"
                  aria-describedby="addressLine1"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  type="text"
                  className="form-control addAccountsInput"
                  id="addressLine2"
                  name="addressLine2"
                  aria-describedby="addressLine2"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="addressState">State</label>
                    <input
                      type="text"
                      className="form-control addAccountsInput"
                      id="addressState"
                      name="addressState"
                      aria-describedby="addressState"
                      value={addressState}
                      onChange={(e) => setAddressState(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="addressCity">City</label>
                    <input
                      type="text"
                      className="form-control addAccountsInput"
                      id="addressCity"
                      name="addressCity"
                      aria-describedby="addressCity"
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="addressPinCode">Pin Code</label>
                    <input
                      type="text"
                      className="form-control addAccountsInput"
                      id="addressPinCode"
                      name="addressPinCode"
                      aria-describedby="addressPinCode"
                      value={addressPinCode}
                      onChange={(e) => setAddressPinCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-around mt-5">
                <button className="btn btnSave">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AddAccountComponent;
