import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import ListProducts from "./Listing/ListProduct";
export default function CatPages() {
  const [listShow, setListShow] = useState({ display: "none" });
  const [display, setDisplay] = useState(false);

  function listShowFunc() {
    setDisplay(true);
    setListShow({ display: "block" });
  }
  function adsShowFunc() {
    setDisplay(false);
    setListShow({ display: "none" });
  }
  return (
    <>
       <div className="row">
          <div className="topCategory col-12 px-4 py-3 ms-1 ">
            <button className="select-category">
              ALL CATEGORIES
              {display === !true ? (
                <SlArrowDown className="s-g-icon " onClick={listShowFunc} />
              ) : (
                <SlArrowUp className="s-g-icon " onClick={adsShowFunc} />
              )}
            </button>
            <Link to="#" className="gategory">
              {" "}
              Mobile Phones{" "}
            </Link>
            <Link to="#" className="gategory">
              Cars{" "}
            </Link>
            <Link to="#" className="gategory">
              {" "}
              Motorcycles{" "}
            </Link>
            <Link to="#" className="gategory">
              {" "}
              Houses{" "}
            </Link>
            <Link to="#" className="gategory">
              TV - Video - Audio{" "}
            </Link>
            <Link to="#" className="gategory">
              {" "}
              Tablets{" "}
            </Link>
            <Link to="#" className="gategory">
              {" "}
              Land & Plots{" "}
            </Link>
          </div>
        </div>
        <ListProducts listShow={listShow} />
     
    </>
  );
}
