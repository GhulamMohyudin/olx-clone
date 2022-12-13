import React from "react";
import "./Header.css";
export default function header(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand " href="/#">
            <img className={props.className} src={props.img} alt="olxLogo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#">
                 {props.list1}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#">
                 {props.list2}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
