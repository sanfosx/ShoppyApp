import React from "react";
import UserImage from "../components/UserImage";

const AboutPage = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "80%",
    margin: "auto",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
    fontFamily: "inherit"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Integrantes</h1>
      <UserImage />
    </div>
  );
};

export default AboutPage;
