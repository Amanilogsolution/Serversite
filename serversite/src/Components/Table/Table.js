import React from "react";
import Footer from "../Dashboard/Footer";
import Nav from "../Dashboard/Nav";
import "./Table.css";

import { useState, useEffect } from "react";
import Pagination from "../Pagination";

export default function Table() {
  const [data, getData] = useState([]);
  const URL = "http://192.168.146.136:8003/api/totaldeviceservicesmaster";

  // useEffect(() => {
  //     fetchData();

  // },[]);
  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  return (
    <>
      <Nav />
      <div className="com">
        <div className="container my-4" id="hit">
          <button className="btn btn-primary  my-2" onClick={fetchData}>Show</button>
          
          <table class="table">
            <thead class="thead-black" id="main">
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Device-Id</th>
                <th scope="col">Device-Services</th>
                <th scope="col">Remark</th>
              </tr>
            </thead>

            <tbody className="entry">
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.sno}</td>
                  <td>{item.id}</td>
                  <td>{item.device_services}</td>
                  <td>{item.remark}</td>
                 
                </tr>
              )).reverse()}
            </tbody>
          </table>
        </div>
        {/* <Footer/> */}
      </div>
      <Pagination/>
    </>
  );
}
