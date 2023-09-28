import { Link } from "react-router-dom";
import Button from "../Elements/Button"
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";


const CardProduct = (props) => {
    const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 mb-4">
        {children}
    </div>
  )
}

const Header = (props) => {
    const {image, id} = props;
    return (
        <Link to={`/product/${id}`}> 
            <img src={image} alt="product" className="p-5 rounded-t-lg h-60 w-96 object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const {name, children} = props;
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-m text-white">
                    {children.substring(0, 100)}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const dispatch = useDispatch();
    const {price, id} = props;
    return (
        <div className="flex items-center justify-between pb-3 px-5">
            <span className="text-xl font-bold text-white">${" "}{price.toLocaleString("id-ID",{ styles:"currency", currency: "USD"})}</span>
            <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({id,qty: 1}))}> Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct