
import { Fragment, useEffect, useState } from "react"
import CardProduct from "../assets/components/Fragments/CardProduct"
import Button from "../assets/components/Elements/Button"

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        image: "/images/shoes-1.jpg",
        price: 1000000,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto laudantium adipisci, error fugiat maxime id aspernatur corrupti necessitatibus quidem.`
    },
    {
        id: 2,
        name: "Sepatu lama",
        image: "/images/shoes-1.jpg",
        price: 500000,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
    },
    {
        id: 3,
        name: "Sepatu usang",
        image: "/images/shoes-1.jpg",
        price: 50000,
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto laudantium adipisci,`
    }
];

const email = localStorage.getItem("email");

const Product = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState([0]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("Cart")) || []); // mengambil data dari local storage
    },[])

    useEffect(() => {
        if(cart.length > 0 ){
            const sum = cart.reduce((acc,item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            },0);
            setTotalPrice(sum)
            localStorage.setItem("Cart", JSON.stringify(cart)); // konversi objek ke json
        }

    },[cart])

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)){
            setCart(
                cart.map((item) => item.id === id?{...item ,qty: item.qty + 1} : item)
            )
        } else {
            setCart([
                ...cart,
                {id,
                qty: 1}]
            )
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

  return (
    <Fragment>
        <div className="flex justify-between bg-blue-600 h-14 text-white items-center px-10 ">
            Navbar
            <div>
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div> 
            
        </div>
        <div className="flex justify-center py-5">
            <div className="flex flex-wrap w-4/6 " >
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} id={product.id}handleAddToCart={handleAddToCart}/>
                </CardProduct>
            ))}
            </div>
            <div className="w-2/6">
                <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
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
                        {cart.map((item) => {
                            const product = products.find(
                                (product) => product.id === item.id
                            );
                            return(
                                <tr key={item.id}>
                                    <td>{product.name}</td>
                                    <td>Rp.{" "}{product.price.toLocaleString("id-ID",{ styles:"currency", currency: "IDR"})}</td>
                                    <td>{item.qty}</td>
                                    <td>Rp.{" "}{(item.qty * product.price).toLocaleString("id-ID",{ styles:"currency", currency: "IDR"})}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="font-bold" >
                            <td colSpan={3}>Total Price</td>
                            <td>Rp.{" "}{totalPrice.toLocaleString("id-ID",{ styles:"currency", currency: "IDR"})}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </Fragment>
  )
}

export default Product