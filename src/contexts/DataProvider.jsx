const { createContext, useContext, useEffect, useReducer } = require("react");

const DataContext = createContext();

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "setProducts": {
            return { ...state, products: action.payload };
        }
        case "setCategories": {
            return { ...state, categories: action.payload };
        }
        default:
            return state;
    }
};

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, {
        products: [],
        categories: [],
    });

    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        if (res.status === 200) {
            const {products} = await res.json(); 
            dispatch({ type: "setProducts", payload: products});
        }
    };

    const fetchCategories = async () => {
        const res = await fetch("/api/categories");
        if (res.status === 200) {
            const {categories} = await res.json()
            dispatch({ type: "setCategories", payload: categories});
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    return (
        <DataContext.Provider value={{products: state.products, categories: state.categories}}>
            {children}
        </DataContext.Provider>             
    );         
};

export const useDataContext = () => useContext(DataContext);
