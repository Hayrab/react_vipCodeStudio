import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button";
import { useLogin } from "../../../hooks/useLogin";
import { DarkMode } from "../../../context/DarkMode";

const NavBar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between bg-blue-600 h-14 text-white items-center px-10 ">
      Navbar
      <div className="flex justify-end items-center">
        {username}

        <div id="menu" className="flex">
          <Button
            classname="mx-1 bg-gray-800 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Button
            classname="bg-gray-800 mx-1 top-2 text-white rounded-md w-[82px]"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? "Light" : "Dark "}
          </Button>
          {/* <MenuDropDown /> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
