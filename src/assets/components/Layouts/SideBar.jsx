import { ChevronFirst } from "lucide-react";

const SideBar = () => {
  return (
    <aside className="h-screen w-1/6">
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className="w-32"
            alt=""
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronFirst />
          </button>
        </div>
        <ul className="flex-1 px-3"></ul>
        <div className="border-r flex px-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div className="leading-4">
            <h4 className="font-semibold">Jhon Doe</h4>
            <span className="text-xs text-gray-600">jhondoe@gmail..com</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
