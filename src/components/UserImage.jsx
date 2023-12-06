import React from "react";
import dataImages from "../dataImages/dataImages";

const UserImage = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  };

  const imageContainerStyle = {
    display: "inline-block", 
    margin: "10px 30px",
  };

  const imageStyle = {
    width: "100px",
    borderRadius: "50%", 
  };

  return (
    <div style={containerStyle}>
      <div>
        {dataImages.map((person, index) => (
          <div key={index} style={{ ...imageContainerStyle, marginBottom: "20px" }}>
            <img src={person.image} alt={`Image ${index}`} style={imageStyle} />
            <p>{`${person.firstName} ${person.lastName}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserImage;
