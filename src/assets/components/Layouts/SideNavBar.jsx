import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { SideBarData } from "../Fragments/SideBarData";

const SideNavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  console.log(sideBar);

  return (
    <>
      <div className="">
        <Link to="#" className="menu-bars">
          <FaBars onClick={() => setSideBar(!sideBar)} />
        </Link>
      </div>
      <nav
        className={`bg-slate-300 fixed top-0 w-[15%] h-full ${
          sideBar ? "nav-menu active" : "nav-menu"
        }`}
      >
        <div className="pt-2 pl-3">
          <Link to="#" className="menu-bars text-xl">
            <FaRegWindowClose onClick={() => setSideBar(!sideBar)} />
          </Link>
        </div>
        <ul className="nav-menu-items">
          {SideBarData.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex justify-start items-center px-1 py-2 list-none  ${item.cName}`}
              >
                <Link
                  to={item.path}
                  className="flex flex-row items-center  w-full pl-5 hover:bg-slate-400 rounded-lg "
                >
                  {item.icon} <span className="px-10">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;
