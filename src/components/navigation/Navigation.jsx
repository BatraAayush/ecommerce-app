import { NavLink } from "react-router-dom";
import "./navigation.css";
import { useDataContext } from "../../contexts/DataProvider";

export const Navigation = () => {
    const { searchHandler, getAllDataHandler } = useDataContext();
    return (
        <div className="nav-bar">
            <NavLink to={"/"}>
                <strong>Shoes Mart</strong>
            </NavLink>
            &emsp;
            <input
                onChange={(e) => searchHandler(e)}
                placeholder="Search"
                type="text"
            />
            &emsp;
            <NavLink onClick={getAllDataHandler} to={"/products"}>Products</NavLink>||
            <NavLink to={"/cart"}>Cart</NavLink>||
            <NavLink to={"/wishlist"}>Wishlist</NavLink>||
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    );
};
