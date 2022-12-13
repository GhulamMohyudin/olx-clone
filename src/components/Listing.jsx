import React from "react";
export default function listing(props) {
  return (
  <>
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/#">
                  {props.value}
                </a>
              </li>
            </ul>
  </>)
}