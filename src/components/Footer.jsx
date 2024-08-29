import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-sky-200 relative">
      <div className="h-[20vh] flex flex-col justify-center items-center text-center">
        <div className="media">[SOCIAL ICONS]</div>
        <div className="title">[TITLE]</div>
        <div className="cpyrght">
          <p className="text-sm flex flex-col justify-center items-center text-center">
            &copy; {new Date().getFullYear()} 📓 Note Management System 📓
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
