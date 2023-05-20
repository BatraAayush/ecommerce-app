import { AddToWishlistButton } from "../../components/AddtoWishlistButton";
import { useCartContext } from "../../contexts/CartProvider";
import "./cart.css";

export const Cart = () => {
    const { cart, incQtyHandler, decQtyHandler, removeFromCartHandler } =
        useCartContext();
    const items = cart.reduce((acc, { qty }) => acc + qty, 0);
    const totalPrice = cart.reduce(
        (acc, { price, qty }) => acc + price * qty,
        0
    );
    const totalDiscount = cart.reduce(
        (acc, { price, discountedPrice, qty }) =>
            acc + (price - discountedPrice) * qty,
        0
    );
    const netPrice = totalPrice - totalDiscount;

    return cart.length === 0 ? (
        <h1>Your Cart is Empty</h1>
    ) : (
        <div>
            <h1>My Cart</h1>
            <div className="cart">
                <ul className="cart-list">
                    {cart.map((product) => {
                        const {
                            productImage,
                            productName,
                            discountedPrice,
                            price,
                            _id,
                            qty,
                        } = product;
                        return (
                            <div key={_id} className="cart-item">
                                <img src={productImage} alt={productName} />
                                <div>
                                    <h3>{productName}</h3>
                                    <p>
                                        Price: ${discountedPrice}{" "}
                                        <span className="price">${price}</span>
                                    </p>
                                    <p>
                                        Quantity:{" "}
                                        <button
                                            disabled={qty <= 1}
                                            onClick={() => decQtyHandler(_id)}
                                        >
                                            -
                                        </button>
                                        {qty}
                                        <button
                                            onClick={() => incQtyHandler(_id)}
                                        >
                                            +
                                        </button>
                                    </p>
                                    <p>
                                        <button
                                            onClick={() =>
                                                removeFromCartHandler(_id)
                                            }
                                        >
                                            Remove from Cart
                                        </button>
                                        <AddToWishlistButton product={product}/>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </ul>
                <div className="bill">
                    <p>
                        <strong>Price Details</strong>{" "}
                    </p>
                    <p>No of items: {items}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Discount: ${totalDiscount}</p>
                    <p>Net Price: ${netPrice}</p>
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    );
};
