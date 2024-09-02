import React from "react";
import { Footer, Form, Navbar } from "../components";
import Flowerbtn from "../components/FlowerBtn/Flowerbtn";
import { useNavigate } from "react-router-dom";

const AddNewNote = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-full w-full bg-sky-100">
      <Navbar />
      <Flowerbtn heading="Home" onClick={handleClick} />
      <Form />
      <Footer />
    </div>
  );
};

export default AddNewNote;
