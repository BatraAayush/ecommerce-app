import "./productCard.css";


export const ProductCard = ({product}) => {
    const {productImage, productName, discountedPrice, price} = product;
    return <div className="product-card">
        <img src={productImage} alt={productName}/>
        <h3>{productName}</h3>
        <p>Price: ${discountedPrice} <span className="price">${price}</span></p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>


    </div>
}