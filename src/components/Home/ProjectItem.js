import React from "react";
import Swal from "sweetalert2";
import { firestore } from "../Firebase";

const ProjectItemComponent = ({ data }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        firestore
          .collection("accounts")
          .doc(localStorage.getItem("accountId"))
          .collection("projects")
          .doc(data.id)
          .delete()
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setTimeout(() => {
              window.location.replace("/home");
            }, 1500);
          });
      }
    });
  };
  return (
    <>
      <div className="col-3 card">
        <div className="cardThumb"></div>
        <div className="cardDesc">
          <h6>{data.title}</h6>
          <p>{data.description}</p>
        </div>
        <div className="cardIcons">
          <div className="row">
            <div className="col-3 cardIconWrap">
              <a href={"/project/pages?projectId=" + data._id}>
                <i className="fa fa-pencil"></i>
              </a>
            </div>
            <div className="col-3 cardIconWrap">
              <i className="fa fa-eye"></i>
            </div>
            <div className="col-3 cardIconWrap">
              <i className="fa fa-cog"></i>
            </div>
            <div className="col-3 cardIconWrap">
              <i className="fa fa-trash-o" onClick={handleDelete}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItemComponent;
