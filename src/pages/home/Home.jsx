import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataProvider";
import "./home.css";
import { ProductCard } from "../../components/product-card/ProductCard";

export const Home = () => {
    const {
        trendingProducts,
        categories,
        singleCategoryFilterHandler,
        productsLoading,
        categoriesLoading,
    } = useDataContext();
    return (
        <div className="home">
            <div className="main-card">
                <Link to="/products">
                    Products
                </Link>
            </div>
            <div>
                <h1>Categories </h1>
                {categoriesLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <ul className="container">
                        {categories.map(({ categoryName, id, image }) => (
                            <li className="card" key={id}>
                                <img
                                    className="category-img"
                                    src={image}
                                    alt="category"
                                />
                                <button
                                    className="button"
                                    onClick={() =>
                                        singleCategoryFilterHandler(categoryName)
                                    }
                                >
                                    {categoryName}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <h1>Trending Collection</h1>
                {productsLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <ul className="container">
                        {trendingProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
