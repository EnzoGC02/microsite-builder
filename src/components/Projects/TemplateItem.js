import React, { useState } from "react";

const TemplateItem = ({ data, handleSelectTemplate, classes }) => {
  const [cardSelect, setCardSelect] = useState(classes);
  const handleClick = () => {
    handleSelectTemplate(data._id);
    setCardSelect("selected");
  };
  return (
    <>
      <div className="col-4">
        <div className={"templCard" + cardSelect}>
          <img
            src={require(`../../assets/img/${data.image}`).default}
            alt=""
            className="img-fluid"
            onClick={handleClick}
          />
          <p>{data.templateTitle}</p>
        </div>
      </div>
    </>
  );
};

export default TemplateItem;
