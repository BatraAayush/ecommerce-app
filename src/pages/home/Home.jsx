import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation/Navigation";
import { useDataContext } from "../../contexts/DataProvider";
import "./home.css"
import { Footer } from "../../components/footer/Footer";
import { ProductCard } from "../../components/product-card/ProductCard";

export const Home = () => {
    const { products, categories } = useDataContext();
    const trendingItems = products.filter(({trending}) => trending);
    return (
        <div className="home">
            <Navigation />
            <div className="main-card">
                <Link to="/products">Products</Link>
            </div>
            <hr></hr>
            <div>
                <h2>Categories </h2>
                <ul className="container">{
                    categories.map(({categoryName,id, image}) => <li className="card" key={id}>
                        <img className="category-img" src={image} alt="category"/>
                        <Link>{categoryName}</Link>
                    </li>)
                }</ul>
            </div>
            <hr></hr>
            <div>
                <h2>Trending Collection</h2>
                <ul className="container">{
                    trendingItems.map(product => <ProductCard key={product.id} product={product}/>)
                }</ul>
            </div>
           <Footer />
    </div>
    );
};
