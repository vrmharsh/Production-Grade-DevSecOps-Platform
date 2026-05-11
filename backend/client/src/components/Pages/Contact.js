
import React, { useState  } from "react";
import "./Contact.css";
import placeholder from "./Images/PlaceHolder.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate();

  const [ user , setUser ] = useState( { 
    name: "" , email: "" , number: "", message: ""
  })

  let name, value;

  const handleInputs = ( a ) =>{
    name = a.target.name;
    value = a.target.value;

    setUser ( { ...user, [name]:value});

  }

  const PostData = async (a) =>{
    a.preventDefault();

    const { name, email , number , message} = user;
    
    const response = await fetch("/contact" , {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify ({ name , email , number , message })       // data send on server has to be string.
    }) ;

  const data = await response.json();

  if (data.status === 400 || !data){
    window.alert("Invalid");
    console.log(data);
  }  else {
    window.alert("Successfull");

    navigate("/");
   };
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4 mt-5">
            <div className="card shadow">
              <img src={placeholder} alt="" className="card-img-top" />
              <div className="card-body">
                <form method="POST" className="validated-form" >


                <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={ user.name }
                  onChange={ handleInputs }
                
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

                <div className="mb-3">
                <label className="form-label" htmlFor="email" >
                  Email
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  value={ user.email }
                  onChange={ handleInputs }
                
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="number" >
                  number
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="number"
                  name="number"
                  value={ user.number }
                  onChange={ handleInputs }
                
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                 message
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="message"
                  name="message"
                  value={ user.message }
                  onChange={ handleInputs }
                
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <button className="btn btn-success" onClick={ PostData }>Submit</button>
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
 