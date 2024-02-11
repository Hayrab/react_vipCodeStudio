import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import { useTotalPrice } from "../../../context/TotalPriceContext";
import { useSelector } from "react-redux";

export const MenuDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalCart, setTotalCart] = useState(0);

  const { total } = useTotalPrice();
  const cart = useSelector((state) => state.cart.data);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div ref={ref}>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        classname="flex items-center rounded-full bg-rose-500 active:border-rose-500 border-8"
      />
      {isOpen && (
        <div
          id="dropdownDelay"
          class="z-10 bg-rose-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div class="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              item : {totalCart} | price : $ {total}
            </div>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div onClick={handleLogout} class="py-2">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
