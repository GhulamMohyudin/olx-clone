import React from "react";
export default function btns(props) {
  return (
    <>
    <div >
    <a className="navbar" href="/#">{props.txt}</a>
    <img src={props.btnImg}class="af24d916" alt="BtnImg"></img>
    </div>
    </>
  )
}