import { AddToWishlistButton } from "../AddtoWishlistButton";
import { AddToCartButton } from "../AddToCartButton";
import "./productCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { productImage, productName, discountedPrice, price, _id, outOfStock } = product;
    console.log(product)
    return (
        <div className="product-card">
            <AddToWishlistButton className="wishlist-button" product={product} />{" "}
            <Link className="link" to={`/products/${_id}`}>
                <img src={productImage} alt={productName} />
                <h3>{productName}</h3>
                <p className="price">
                    Price: ${discountedPrice}{" "}
                    <span className="cut-price">${price}</span>
                </p>
                {outOfStock ? <h3>Out of Stock</h3> : <h3>In Stock</h3>}
            </Link>
            <AddToCartButton product={product} />
        </div>
    );
};
