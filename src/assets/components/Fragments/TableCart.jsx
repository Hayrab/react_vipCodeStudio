import { useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../../context/TotalPriceContext";

const TableCart = (products) => {
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const totalPriceRef = useRef(null);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    // fungsi menjumlahkan total pricenya
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          IntialState: [
            {
              total: sum,
            },
          ],
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart)); // konversi objek ke json
    }
  }, [cart, products]);

  return (
    <>
      <table
        className={`text-left table-auto border-separate border-spacing-x-5 ${
          !isDarkMode ? "text-black" : "text-white"
        }`}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <tr key={item.id}>
                  <td>{product.title.substring(0, 10)}</td>
                  <td>
                    ${" "}
                    {/* {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })} */}
                  </td>
                  <td>
                    <button>-</button>
                    <input type="text" value={item.qty} />
                  </td>
                  <td>
                    ${" "}
                    {/* {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })} */}
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr className="font-bold" ref={totalPriceRef}>
            <td colSpan={3}>Total Price</td>
            <td>
              ${" "}
              {/* {total.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })} */}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TableCart;
