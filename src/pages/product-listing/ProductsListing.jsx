import { ProductCard } from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/Spinner";
import { useDataContext } from "../../contexts/DataProvider";
import "./productListing.css";
import { AiFillStar } from "react-icons/ai";

export const ProductListing = () => {
    const {
        filteredProducts,
        categories,
        getAllDataHandler,
        priceFilterHandler,
        priceRange,
        ratingFilterHandler,
        ratingRange,
        setCategoryHandler,
        categoryFilter,
        sortPriceHandler,
        sortPriceFilter,
        productsLoading,
    } = useDataContext();
    return productsLoading ? (
        <div className="loading-div">
            <Spinner className="spinner" />
        </div>
    ) : (
        <div className="product-listing">
            <div className="flex-container-1">
                <div className="filters">
                    <div>
                        <h3 className="filter-heading">Filters</h3>
                        <button
                            onClick={getAllDataHandler}
                            className="clear-button"
                        >
                            Clear
                        </button>
                    </div>
                    <h3>Price Range</h3>
                    <input
                        onChange={(e) => priceFilterHandler(e)}
                        min={0}
                        max={200}
                        defaultValue={priceRange ? priceRange : 200}
                        type="range"
                    />
                    <div>Below || Equal ${priceRange ? priceRange : 200}</div>
                    <h3>Category</h3>
                    <ul>
                        {categories.map(({ categoryName, id }) => (
                            <li key={id}>
                                <input
                                    checked={categoryFilter.includes(
                                        categoryName
                                    )}
                                    value={categoryName}
                                    onChange={(e) => setCategoryHandler(e)}
                                    type="checkbox"
                                />
                                {categoryName}
                            </li>
                        ))}
                    </ul>
                    <h3>Rating</h3>
                    <input
                        onChange={(e) => ratingFilterHandler(e)}
                        min={0}
                        max={5}
                        defaultValue={ratingRange ? ratingRange : 0}
                        type="range"
                    />
                    <div>
                        Above || Equal {ratingRange ? ratingRange : 0}{" "}
                        <AiFillStar className="star" />
                    </div>
                    <h3>Sort By</h3>
                    <input
                        checked={sortPriceFilter === "asc"}
                        onChange={(e) => sortPriceHandler(e)}
                        value={"asc"}
                        name="sort"
                        type="radio"
                    />
                    <label>Price Low to High</label>
                    <br />
                    <input
                        checked={sortPriceFilter === "desc"}
                        onChange={(e) => sortPriceHandler(e)}
                        value={"desc"}
                        name="sort"
                        type="radio"
                    />
                    <label>Price High to Low</label>
                </div>
                <ul className="product-container">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
