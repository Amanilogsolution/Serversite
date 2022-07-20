import React from "react";
import Footer from "../Dashboard/Footer";
import Nav from "../Dashboard/Nav";
import "./Table.css";
import axios from 'axios'

export default function Table() {
   
 const handleSubmit = (e)=>{
   

  axios.get('http://192.168.146.136:8003/api/totaldeviceservices')
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
      <Nav></Nav>
      <div className=".com">
        <div className="container my-4" id="hit">
          <button className="btn btn-primary  my-2">Edit</button>
          <button className="btn btn-primary mx-2">Delete</button>
          <table class="table">
            <thead class="thead-dark" id="main">
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Device-Id</th>
                <th scope="col">Device-Services</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>

            <tbody className="entry">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}
