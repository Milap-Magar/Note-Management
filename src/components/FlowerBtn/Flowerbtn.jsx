import React from "react";
import "./flower.css";

const Flowerbtn = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      <div className="wrapper">
        <div className="flower flower1">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
        <div className="flower flower2">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
        <div className="flower flower3">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
        <div className="flower flower4">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
        <div className="flower flower5">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
        <div className="flower flower6">
          <div className="petal one"></div>
          <div className="petal two"></div>
          <div className="petal three"></div>
          <div className="petal four"></div>
        </div>
      </div>
      <span className="z-100 px-1 py-1 absolute top-[17.9%] left-16 bg-transparent cursor-pointer backdrop-blur-md">
        {props.heading}
      </span>
    </button>
  );
};

export default Flowerbtn;
