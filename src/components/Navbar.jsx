import React from "react";
import NavbarBtn from "./NavbarBtn";
export default function header(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#">
            <img src={props.img} className={props.className} alt="olxLogo" />
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
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder={props.placeholder1}
                aria-label="Search"
              />
            </form>
            <form class="container-fluid">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder={props.placeholder2}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
            
            <NavbarBtn
              txt="Login"
              btnImg="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
