

import React, { useState } from "react";
import placeholder from "./Images/SignIn.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const [ email , setEmail ] = useState( ' ' );
  const [ password , setPassword ] = useState ( ' ' );
  
  const loginUser = async ( a ) => {
    a.preventDefault();
    const response = await fetch("/SignIn" , {
      method: "POST",
       headers: {
        "Content-Type" : "application/json"
      },

      /* headers: {
        'Content-Type':'application/x-www-form-urlencoded'
      }, */

      body: JSON.stringify ({ email , password })       // data send on server has to be string.
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
                <form method="POST"  >

                    <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="email"
                      name="email"
                      value={ email }
                      onChange={ ( a ) => setEmail ( a.target.value ) }
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="password"
                      name="password"
                      value={ password }
                      onChange={ ( a ) => setPassword ( a.target.value ) }
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <button className="btn btn-success" onClick={ loginUser }>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  };

export default SignIn;


