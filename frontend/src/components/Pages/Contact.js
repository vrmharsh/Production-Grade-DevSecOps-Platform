import React, { useState } from "react";
import "./Contact.css";
import placeholder from "./Images/PlaceHolder.png";
//import { useNavigate} from "react-router-dom";

const Contact = () => {

//  const navigate = useNavigate();

  const [name, updatedName] = useState("");
  const [email, updatedEmail] = useState("");
  const [phoneNumber, updatedPhoneNumber] = useState("");
  const [message, updatedMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [allUsers, setNewUsers] = useState([]);

  const submit = async(a) => {
    a.preventDefault();
    const newUsers = {
      name: name,
      email: email,
      number: phoneNumber,
      message: message,
    };
    try {  
    const response = await fetch("/api/contact",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(newUsers)
    });

    const data = await response.json();
    console.log("Response:", data);

    if(response.status===201){
     console.log(response.status)
//     navigate("/successPage");
     setSuccessMessage(
      "Thank you for contacting us. We will get back to you soon"
     );
    }

  } catch (error){
    console.log("Error:", error);
  }

    setNewUsers([...allUsers, newUsers]);
    console.log(allUsers);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 mt-5">
            <div className="card shadow">
              <img src={placeholder} alt="" className="card-img-top" />
              <div className="card-body">
                <form action="" onSubmit={submit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(a) => updatedName(a.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(b) => updatedEmail(b.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="number">
                      Number
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      id="number"
                      name="number"
                      value={phoneNumber}
                      onChange={(c) => updatedPhoneNumber(c.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="message"
                      name="message"
                      value={message}
                      onChange={(d) => updatedMessage(d.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="card-body">
                     {successMessage && (
                      <div style={{ color: "blue", marginBottom: "10px"}}>
                        {successMessage}
                      </div>
                     )}
                  </div>

                  <button className="btn btn-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
