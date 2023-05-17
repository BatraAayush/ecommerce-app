import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataProvider";
import "./home.css"
import { ProductCard } from "../../components/product-card/ProductCard";

export const Home = () => {
    const { trendingProducts, categories, categoryFilterHandler, getAllDataHandler } = useDataContext();
    return (
        <div className="home">
            <div className="main-card">
                <Link onClick={getAllDataHandler} to="/products">Products</Link>
            </div>
            <hr></hr>
            <div>
                <h2>Categories </h2>
                <ul className="container">{
                    categories.map(({categoryName,id, image}) => <li className="card" key={id}>
                        <img className="category-img" src={image} alt="category"/>
                        <button onClick={() => categoryFilterHandler(categoryName)}>{categoryName}</button>
                    </li>)
                }</ul>
            </div>
            <hr></hr>
            <div>
                <h2>Trending Collection</h2>
                <ul className="container">{
                    trendingProducts.map(product => <ProductCard key={product.id} product={product}/>)
                }</ul>
            </div>
    </div>
    );
};
