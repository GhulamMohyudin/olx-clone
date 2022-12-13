import React from "react";
import Listing from "./Listing";
export default function CatPages(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="/#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <Listing value=" Mobile Phones" />
              <Listing value="Cars" />
              <Listing value="Motorcycles" />
              <Listing value="Houses" />
              <Listing value="TV - Video - Audio" />
              <Listing value="Tablets" />
              <Listing value="Land & Plots" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
