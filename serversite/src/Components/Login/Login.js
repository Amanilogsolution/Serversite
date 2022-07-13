import React from "react";
import Awllogo from "../../img/awl2.png";
import "./Login.css";

export default function Login() {
  return (
    <>
    <div className="formmaindiv">

      <div className="formcontainer">
        <div className="login">
        <img className="p-0" id="img" src={Awllogo} alt="awl india"  />
        <h4 className="text-center" style={{marginBottom:"70px"}}>AWL India Serversite</h4>
        
        <div className="control">
          <label>Username</label>
          <br></br>
          <input type="text" id="un"></input>
       
       
          <label>Password</label>
          <br></br>
          <input type="password" id="psw"></input>
       
      
          <button className="btn btn-primary mt-2 psw-btn" value="Login">Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
