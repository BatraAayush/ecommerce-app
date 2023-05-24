import { toast } from "react-toastify";
import { useCartContext } from "../contexts/CartProvider";
import { useLoginContext } from "../contexts/LoginProvider";

export const AddToWishlistButton = ({ product }) => {
    const loginNotify = () => toast("Please Login First");

    const {
        isItemPresentinWishlistHandler,
        addToWishlistHandler,
        removeFromWishlistHandler,
    } = useCartContext();
    const { login } = useLoginContext();
    let wishlistCounter = 0;
    const notify = () => toast("Added to Wishlist");
    const removedNotify = () => toast("Removed from Wishlist");


    return !isItemPresentinWishlistHandler(product) ? (
        <button
            onClick={() => {
                if (login) {
                    wishlistCounter++;
                    if (wishlistCounter === 1) {
                        notify();
                        return addToWishlistHandler(product);
                    }
                } else {
                    loginNotify();
                }
            }}
        >
            Add To Wishlist
        </button>
    ) : (
        <button onClick={() => {
            removedNotify();
            removeFromWishlistHandler(product._id)
            }}>
            Remove From Wishlist
        </button>
    );
};
