import { useCartContext } from "../contexts/CartProvider";
import { useLoginContext } from "../contexts/LoginProvider";

export const AddToWishlistButton = ({ product }) => {
    const {
        isItemPresentinWishlistHandler,
        addToWishlistHandler,
        removeFromWishlistHandler,
    } = useCartContext();
    const { login } = useLoginContext();
    let wishlistCounter = 0;
    return !isItemPresentinWishlistHandler(product) ? (
        <button
            onClick={() => {
                if (login) {
                    wishlistCounter++;
                    if (wishlistCounter === 1) {
                        return addToWishlistHandler(product);
                    }
                } else {
                    return alert("please Login First");
                }
            }}
        >
            Add To Wishlist
        </button>
    ) : (
        <button onClick={() => removeFromWishlistHandler(product._id)}>
            Remove From Wishlist
        </button>
    );
};
