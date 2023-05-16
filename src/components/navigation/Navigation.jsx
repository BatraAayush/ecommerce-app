import { NavLink } from "react-router-dom";
import "./navigation.css"

export const Navigation = () => {
    return (
        <div className="nav-bar">
            <NavLink to={"/"}>
                <strong>Shoes Mart</strong>
            </NavLink> &emsp;
            <input placeholder="Search" type="text" />
            &emsp;
            <NavLink to={"/products"}>Products</NavLink>||
            <NavLink to={"/cart"}>Cart</NavLink>||
            <NavLink to={"/wishlist"}>Wishlist</NavLink>||
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    );
};
