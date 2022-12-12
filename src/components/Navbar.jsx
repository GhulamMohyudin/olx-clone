import React from "react";
import NavbarBtn from "./NavbarBtn";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
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
              <BiSearch />
              <input className="mx-2"
             
                type="text"
                placeholder={props.placeholder1}
               
              />
              <IoIosArrowDown />
            </form>
            <form class="container-fluid">
            <div className="col-sm-9">
                <div className="findItem d-flex  gx-0 float-start">
                <input
                  type="text"
                  class="form-control"
                  placeholder={props.placeholder2}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                   <button className="searchBtn ms-auto">
                  <BiSearch className="fs-3" />{" "}
                </button>
              </div>
              </div>
            </form>
            <div className="login sellBtn d-flex float-end ">
                  <button className="login me-3">
                    <Link to="#" className=" loginBtn">
                      Login
                    </Link>
                  </button>
                  </div>
            <NavbarBtn
              btnImg="sellimg.png"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
