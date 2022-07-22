import React from "react";


export default function Pagination() {
  return (
    <>
      <div
        className="d-flex 1
        justify-content-center"
        style={{ position: "fixed", bottom: "0", width: "100%" }}
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link bg-black text-white" href="#">
                &#8249;&#8249;
              </a>
            </li>
            <li class="page-item">
              <a class="page-link bg-black text-white" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link bg-black text-white" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link bg-black text-white" href="#">
                3
              </a>
            </li>

            <li class="page-item">
              <a class="page-link bg-black text-white" href="#">
                &#8250;&#8250;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
