import React from "react";
import Awllogo from "../../img/awl2.png";
import "./Login.css";

export default function Login() {
  return (
    <>
    <div className="formmaindiv">

      <div className="formcontainer" style={{boxSizing:"border-box"}}>
        <div className="login">
        <img className="p-0" id="img" src={Awllogo} alt="awl india"  />
        <h4 className="text-center" style={{marginBottom:"70px"}}>AWL India Serversite</h4>
        
        <div className="control">
          
          {/* <label>Username</label> */}
          <input type="text" id="un" placeholder="Username" style={{marginBottom:"30px",color:"white",background: 'transparent', border:"none",boxShadow: "0 1.3px  white"}}></input>
         
       
          {/* <label>Password</label> */}
          <input type="password" id="psw" placeholder="Password" style={{marginBottom:"20px",color:"white",background: 'transparent',border:"none",boxShadow: "0 1.3px  white"}}></input>
          
       <button className="btn btn-outline-light mt-2 psw-btn" value="Login">Login</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
