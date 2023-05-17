import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { productImage, productName, discountedPrice, price, _id } = product;
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
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
        </div>
    );
};
