import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {

    const {products} = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0)

    const totalPriceRef = useRef(null);

    useEffect(() => {
      if (cart.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }, [cart]);

    useEffect(() => { // fungsi menjumlahkan total pricenya
        if (products.length > 0 && cart.length > 0) {
          const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
          }, 0);
          setTotalPrice(sum);
          localStorage.setItem("cart", JSON.stringify(cart)); // konversi objek ke json
        }
      }, [cart, products]); 

  return (
    <>
        <table className="text-left table-auto border-separate border-spacing-x-5">
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
                    {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                    })}
                </td>
                <td>{item.qty}</td>
                <td>
                    ${" "}
                    {(item.qty * product.price).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                    })}
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
            {totalPrice.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
            })}
            </td>
        </tr>
        </tfoot>
        </table>
    </>
  )
}

export default TableCart