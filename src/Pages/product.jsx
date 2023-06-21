import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../assets/components/Fragments/CardProduct";
import Button from "../assets/components/Elements/Button";
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../assets/components/Fragments/TableCart";

const Product = () => {
  const [products, setProducts] = useState([]);

  const username = useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("Cart")) || []); // mengambil data dari local storage
  // }, []);



  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  return (
    <Fragment>
      <div className="flex justify-between bg-blue-600 h-14 text-white items-center px-10 ">
        Navbar
        <div>
          {username}
          <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6 ">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
