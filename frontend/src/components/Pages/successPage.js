import React from "react";

const SuccessPage = () => {
  return (
    <div
  style={{
    marginLeft: "500px", 
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
       }}
    >
      <div>
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Thank You!
        </h1>
        <p style={{ fontSize: "18px" }}>
          Your request has been submitted successfully.
        </p>
        <p style={{ fontSize: "18px" }}>
          We will contact you shortly. You can close the window
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;