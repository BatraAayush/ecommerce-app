import { Footer } from "../../components/footer/Footer";
import { Navigation } from "../../components/navigation/Navigation";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useDataContext } from "../../contexts/DataProvider";
import "./productListing.css";

export const ProductListing = () => {
    const { products } = useDataContext();
    console.log(products);
    return (
        <div className="product-listing">
            <Navigation />
            <div className="flex-container-1">
                <div className="filters">
                    <div className="flex-container-2">
                        <h3>Filters</h3>
                        <button>clear</button>
                    </div>
                    <h3>Price</h3>
                </div>
                <ul className="product-container">
                    {products.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
};
