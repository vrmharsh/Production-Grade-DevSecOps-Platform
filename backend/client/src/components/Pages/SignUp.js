import React, { useState } from "react";
import placeholder from "./Images/SignUp.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [ user , setUser ] = useState( { 
    email: "" , password: "", confirmPassword: ""
  })

  let name, value;

  const handleInputs = ( a ) =>{
    name = a.target.name;
    value = a.target.value;

    setUser ( { ...user, [name]:value});

  }

  const PostData = async (a) =>{
    a.preventDefault();

    const { email , password , confirmPassword } = user;
    
    const response = await fetch("/SignUp" , {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify ({ email , password , confirmPassword })       // data send on server has to be string.
    }) ;

  const data = await response.json();

  if (data.status === 400 || !data){
    window.alert("Invalid");
    console.log(data);
  }  else {
    window.alert("Successfull");

    navigate("/SignIn");
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
                <form method="POST" >

                <div className="mb-3">
                <label className="form-label" htmlFor="email">
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
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="password"
                  name="password"
                  value={ user.password }
                  onChange={ handleInputs }
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="confirmPassword">
                  ConfirmPassword
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={ user.confirmPassword }
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

export default SignUp;
 