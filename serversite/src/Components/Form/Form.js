import React from "react";
import './Form.css'

export default function Form() {
  return (
    <>
    <body>
      <div className="container">
        <div className="title">Resistration</div>
        <form action="/">
            <div className="user-details">
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Full Name"></input>
                </div>
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Phone Number"></input>
                </div>
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Password"></input>
                </div>
                <div className="input-box">
                    <span class="details"></span>
                    <input type="text" placeholder="Confirm Password"></input>
                </div>
                
               
                <div className="button my-2"> 
                   <button className="btn btn-primary">Resister</button>
                </div>
            </div>
        </form>
      </div>
    </body>
    </>
  );
}
