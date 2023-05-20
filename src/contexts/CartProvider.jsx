import { createContext, useContext, useEffect, useReducer } from "react";
import { json } from "react-router";

const CartContext = createContext();
const reducerFunction = (state, action) => {
    switch (action.type) {
        case "setCart": {
            return { ...state, cart: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, {
        cart: [],
    });
    const fetchData = async () => {
        try {
            const res = await fetch("/api/user/cart", {
                method: "GET",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
            });
            if (res.status === 200) {
                const { cart } = await res.json();
                dispatch({ type: "setCart", payload: cart });
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const addToCartHandler = async (product) => {
        try {
            const res = await fetch("/api/user/cart", {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify({ product }),
            });
            if (res.status === 201) {
                const { cart } = await res.json();
                dispatch({ type: "setCart", payload: cart });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const isItemPresentHandler = (product) => {
        return state.cart.find(({ _id }) => product._id === _id);
    };

    const incQtyHandler = async (id) => {
        try {
            const bodySent = {
                action: {
                    type: "increment",
                },
            };
            const res = await fetch(`/api/user/cart/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify(bodySent),
            });
            if (res.status === 200) {
                const { cart } = await res.json();
                dispatch({ type: "setCart", payload: cart });
            }
        } catch (e) {
            console.log(e);
        }
    };
    const decQtyHandler = async(id) => {
        try {
            const bodySent = {
                action: {
                    type: "decrement",
                },
            };
            const res = await fetch(`/api/user/cart/${id}`, {
                method: "POST",
                headers: {
                    authorization: `${localStorage.getItem("encodedToken")}`,
                },
                body: JSON.stringify(bodySent),
            });
            if (res.status === 200) {
                const { cart } = await res.json();
                dispatch({ type: "setCart", payload: cart });
            }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCartHandler,
                isItemPresentHandler,
                incQtyHandler,
                decQtyHandler,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
