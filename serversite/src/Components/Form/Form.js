import React from "react";
import Footer from "../Dashboard/Footer";
import Nav from "../Dashboard/Nav";
import "./Form.css";

export default function Form() {
  return (
    <>
    <Nav/>
      <div className="com">
        
        <div className="main ">
          <div className="containers">
            <div className="title">Registration</div>
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
}
