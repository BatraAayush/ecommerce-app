import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const AddressContext = createContext();

const reducerFunction = (state, action) => {
    switch (action.type) {
        case "setNameHandler": {
            return { ...state, name: action.payload };
        }
        case "setMobileNoHandler": {
            return { ...state, mobileNo: action.payload };
        }
        case "setAddressHandler": {
            return { ...state, address: action.payload };
        }
        case "setPinCodeHandler": {
            return { ...state, pinCode: action.payload };
        }
        case "setCityHandler": {
            return { ...state, city: action.payload };
        }
        case "addAddressHandler": {
            return { ...state, addressData:[
                ...state.addressData,
                {
                    name:state.name,
                    mobileNo:state.mobileNo,
                    pinCode:state.pinCode,
                    city:state.city,
                    address: state.address
                }
            ] };
        }
        
        default: {
            return { ...state };
        }
    }
};

const AddressProvider = ({ children }) => {
    const notify = () => toast("Please fill all the inputs");
    const [state, dispatch] = useReducer(reducerFunction, {
        addressData: [
            {
                name: "John Snow",
                mobileNo: 9999999999,
                pinCode: 100001,
                city: "Delhi",
                address: "224 ModelTown",
            },
        ],
        name: "",
        address: "",
        mobileNo: "",
        pinCode: "",
        city: "",
    });
    const setNameHandler = (e) => {
        dispatch({ type: "setNameHandler", payload: e.target.value });
    };
    const setMobileNoHandler = (e) => {
        dispatch({ type: "setMobileNoHandler", payload: e.target.value });
    };
    const setPinCodeHandler = (e) => {
        dispatch({ type: "setPinCodeHandler", payload: e.target.value });
    };
    const setCityHandler = (e) => {
        dispatch({ type: "setCityHandler", payload: e.target.value });
    };
    const setAddressHandler = (e) => {
        dispatch({ type: "setAddressHandler", payload: e.target.value });
    };
    const addAddressHandler = () => {
        if (
            state.name === "" ||
            state.mobileNo === "" ||
            state.address === "" ||
            state.city === "" ||
            state.pinCode === ""
        ) {
            notify();
        } else {
            dispatch({type:"addAddressHandler"});
            dispatch({ type: "setNameHandler", payload: "" });
            dispatch({ type: "setMobileNoHandler", payload: "" });
            dispatch({ type: "setPinCodeHandler", payload: "" });
            dispatch({ type: "setCityHandler", payload: "" });
            dispatch({ type: "setAddressHandler", payload: "" });

        }
    };
    return (
        <AddressContext.Provider
            value={{
                addressData: state.addressData,
                setNameHandler,
                setAddressHandler,
                setCityHandler,
                setPinCodeHandler,
                setMobileNoHandler,
                addAddressHandler,
                name:state.name,
                address: state.address,
                mobileNo:state.mobileNo,
                pinCode:state.pinCode,
                city: state.city
            }}
        >
            {children}
        </AddressContext.Provider>
    );
};

export default AddressProvider;

export const useAddressContext = () => useContext(AddressContext);
