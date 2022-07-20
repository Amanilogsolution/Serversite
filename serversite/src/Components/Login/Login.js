import React from "react";
import Awllogo from "../../img/awl2.png";
import "./Login.css";
import axios from 'axios'


export default function Login() {
 
 const handleSubmit = (e)=>{
   
    const userid= document.getElementById('un').value;
    const password= document.getElementById('psw').value;
    axios.post('http://192.168.146.136:8003/api/login',{userid,password})
    .then((response) => {  
      console.log(response.data);
      if(response.data.status==="Success"){ 
        window.location.href='/dashboard'
      }
    
 
    })
    .catch((err)=>{
      console.log(err)
      console.log(err.response)
    })
    
   
 }


  return (
    <>
      <div className="formmaindiv">
        <div className="formcontainer" style={{ boxSizing: "border-box" }}>
          <div className="login">
            <img className="p-0" id="img" src={Awllogo} alt="awl india" />
            <h4 className="text-center" style={{ marginBottom: "70px" }}>
              AWL India Serversite
            </h4>

            <div className="control">
              <input
                type="text"
                id="un"
                placeholder="Username"
                style={{
                  marginBottom: "30px",
                  background: "transparent",
                  border: "none",
                  borderBottom: "2px solid black",
                  color: "black",
                }}
              ></input>

              <input
                type="password"
                id="psw"
                placeholder="Password"
                style={{
                  marginBottom: "20px",
                  background: "transparent",
                  border: "none",
                  borderBottom: "2px solid black",
                }}
              ></input>

              <button className="btn btn-primary mt-2 psw-btn" value="Login" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
