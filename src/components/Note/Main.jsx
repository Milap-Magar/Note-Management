import React from "react";
import Card from "./Card";
import Flowerbtn from "../FlowerBtn/Flowerbtn";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addnotes");
  };

  return (
    <div className="h-full w-full bg-sky-100">
      <Flowerbtn heading="Add Notes" onClick={handleClick} />
      <Card />
    </div>
  );
};

export default Main;
