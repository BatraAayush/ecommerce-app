import { ProductCard } from "../../components/product-card/ProductCard";
import { useCartContext } from "../../contexts/CartProvider";
import "./Wishlist.css"

export const Wishlist = () => {
    const { wishlist } = useCartContext();
    return wishlist.length === 0 ? (
        <h1>Your Wishlist is Empty</h1>
    ) : (
        <div>
            <h1>My Wishlist</h1>
            <ul className="wishlist">
                {wishlist.map(product => <ProductCard key={product.id} product={product}/>)}
            </ul>
        </div>
    );
};
