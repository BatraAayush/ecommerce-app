import { NavLink } from "react-router-dom";
import "./navigation.css";
import { useDataContext } from "../../contexts/DataProvider";
import { useLoginContext } from "../../contexts/LoginProvider";

export const Navigation = () => {
    const {login, userName} = useLoginContext();
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
            <NavLink to={"/login"}>{login ? "Logout" : "Login"}</NavLink>&emsp;
            {login && <strong>Hello {userName}</strong>}
        </div>
    );
};
