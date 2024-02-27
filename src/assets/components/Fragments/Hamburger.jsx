import { useState } from "react";

const Hamburger = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <button onClick={() => setNavBarOpen((prev) => !prev)}>
      {console.log(navBarOpen ? "open" : "close")}
      <div id="Hamburger" className="w-8 h-8 z-10 flex flex-col justify-around">
        <div id="burger" className="w-8 h-1 rounded-lg bg-black" />
        <div id="burger" className="w-8 h-1 rounded-lg bg-black" />
        <div id="burger" className="w-8 h-1 rounded-lg bg-black" />
      </div>
    </button>
  );
};

export default Hamburger;
