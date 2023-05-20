import { useParams } from "react-router";
import { useDataContext } from "../../contexts/DataProvider";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartProvider";
import { useLoginContext } from "../../contexts/LoginProvider";

export const ProductDetails = () => {
    const { products } = useDataContext();
    const { productId } = useParams();
    const {addToCartHandler, isItemPresentHandler } = useCartContext;
    const {login} = useLoginContext();
    let product = {};
    let counter = 0;
    product = products.find(({ _id }) => {
        return _id === productId;
    });
    const {
        productImage,
        productName,
        productDescription,
        categoryName,
        color,
        discountPercent,
        discountedPrice,
        price,
        gender,
        size,
        onSale,
        outOfStock,
        trending,
    } = product;
    return (
        <div className="product-details">
            <img src={productImage} alt="productImage" />
            <div className="details">
                <h1>Product Details</h1>
                <h1>{productName}</h1>
                <p>
                    <strong>Description: </strong>
                    {productDescription}
                </p>
                <p>
                    <strong>Category: </strong>
                    {categoryName}
                </p>
                <p>
                    <strong>Gender: </strong>
                    {gender}
                </p>
                <p>
                    <strong>Size: </strong>
                    {size}
                </p>
                <p>
                    <strong>Color: </strong>
                    {color}
                </p>
                <p>
                    <strong>Discount Percentage: </strong>
                    {discountPercent}
                </p>
                <p>
                    <strong>Price: </strong>${discountedPrice} - {price}
                </p>
                <p>
                    <strong>{onSale ? "On Sale" : ""}</strong>{" "}
                    <strong>{outOfStock ? "Out of Stock" : ""}</strong>{" "}
                    <strong>{trending ? "Trending" : ""}</strong>{" "}
                </p>
                {!(product) ? (
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
                )}{" "}
                <button>Add To Wishlist</button>
            </div>
        </div>
    );
};
