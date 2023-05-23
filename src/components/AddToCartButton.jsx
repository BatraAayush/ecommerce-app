import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartProvider";
import { useLoginContext } from "../contexts/LoginProvider";
import { toast } from "react-toastify";

export const AddToCartButton = ({ product }) => {
    const { login } = useLoginContext();
    const { isItemPresentInCartHandler, addToCartHandler } = useCartContext();
    let counter = 0;
    const notify = () => toast("Added to Cart");
    return !isItemPresentInCartHandler(product) ? (
        <button
            onClick={() => {
                if (login) {
                    counter++;
                    if (counter === 1) {
                        notify();
                        return addToCartHandler(product);
                    }
                } else {
                    return alert("please Login First");
                }
            }}
        >
            Add to cart
        </button>
    ) : (
        <>
            <Link to={"/cart"}>Go to Cart</Link>
        </>
    );
};
