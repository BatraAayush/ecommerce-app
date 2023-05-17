import { useParams } from "react-router";
import { useDataContext } from "../../contexts/DataProvider";
import "./ProductDetails.css";

export const ProductDetails = () => {
    const { products } = useDataContext();
    const { productId } = useParams();
    let product = {};
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
                <button>Add to Cart</button>
                <button>Add To Wishlist</button>
            </div>
        </div>
    );
};
