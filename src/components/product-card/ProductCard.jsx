import { useCartContext } from "../../contexts/CartProvider";
import { useLoginContext } from "../../contexts/LoginProvider";
import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }, cart) => {
    const { productImage, productName, discountedPrice, price, _id } = product;
    const { addToCartHandler, isItemPresentHandler } = useCartContext();
    const { login } = useLoginContext();
    let counter = 0;
    return (
        <div className="product-card">
            <Link to={`/products/${_id}`}>
                <img src={productImage} alt={productName} />
                <h3>{productName}</h3>
                <p>
                    Price: ${discountedPrice}{" "}
                    <span className="price">${price}</span>
                </p>
            </Link>
            {!isItemPresentHandler(product) ? (
                <button
                    onClick={() => {
                        if (login) {
                            counter++;
                            if (counter === 1) {
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
                <Link to={"/cart"}>Go to Cart</Link>
            )}

            <button>Add to Wishlist</button>
        </div>
    );
};
