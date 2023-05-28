import React, { useState } from "react";
import "./Checkout.css";
import { useCartContext } from "../../contexts/CartProvider";
import { useAddressContext } from "../../contexts/AddressProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { items, totalPrice, totalDiscount, netPrice } = useCartContext();
    const deliveryCharge = 1;
    const {
        addressData,
        setNameHandler,
        setAddressHandler,
        setCityHandler,
        setPinCodeHandler,
        setMobileNoHandler,
        addAddressHandler,
        name,
        address,
        mobileNo,
        pinCode,
        city,
        deleteHandler,
        showAddressBoxHandler,
        showAddress,
    } = useAddressContext();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const notify = () => toast("Order Placed Successfully");
    const fillAddressNotify = () => toast("Please select an Address");

    const [selectedAddress, setSelectedAddress] = useState({});
    console.log(selectedAddress);
    return orderPlaced ? (
        <div>
            <h1>Order Placed Successfully</h1>
            <div>
                <h2>Summary</h2>
                <p>No of items: {items}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Discount: ${totalDiscount}</p>
                <p>Delivery charges: ${deliveryCharge}</p>
                <p>Net Price: ${netPrice + deliveryCharge}</p>
                <h2>Address Details</h2>
                <h3>{selectedAddress.name}</h3>
                            <p>{`${selectedAddress.address} ${selectedAddress.city} ${selectedAddress.pinCode}`}</p>
                            <p>
                                <strong>Mobile no:</strong> {selectedAddress.mobileNo}
                            </p>
            </div>
            <Link to="/">Back To Website</Link>
        </div>
    ) : (
        <div className="checkout">
            <div className="address">
                <h1>Address Details</h1>
                <ul>
                    {addressData.map((address, i) => (
                        <div key={i}>
                            <input
                                name="address"
                                type="radio"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedAddress(address);
                                    }
                                }}
                            />
                            <button onClick={() => deleteHandler(i)}>
                                Delete
                            </button>

                            <h1>{address.name}</h1>
                            <p>{`${address.address} ${address.city} ${address.pinCode}`}</p>
                            <p>
                                <strong>Mobile no:</strong> {address.mobileNo}
                            </p>
                            <hr />
                        </div>
                    ))}
                </ul>
                <button
                    disabled={showAddress}
                    onClick={() => showAddressBoxHandler(true)}
                >
                    Add Address
                </button>
                {showAddress && (
                    <div>
                        <h3>Add new Address</h3>
                        <p>
                            <label>Name: </label>
                            <input
                                value={name}
                                onChange={(e) => setNameHandler(e)}
                                type="text"
                            />
                        </p>
                        <p>
                            <label>Mobile Number: </label>
                            <input
                                value={mobileNo}
                                onChange={(e) => setMobileNoHandler(e)}
                                type="number"
                            />
                        </p>
                        <p>
                            <label>Pincode: </label>
                            <input
                                value={pinCode}
                                onChange={(e) => setPinCodeHandler(e)}
                                type="number"
                            />
                        </p>
                        <p>
                            <label>City: </label>
                            <input
                                value={city}
                                onChange={(e) => setCityHandler(e)}
                                type="text"
                            />
                        </p>
                        <p>
                            <label>Address: </label>
                            <input
                                value={address}
                                onChange={(e) => setAddressHandler(e)}
                                type="text"
                            />
                        </p>
                        <button
                            type="submit"
                            onClick={(e) => {
                                addAddressHandler();
                            }}
                        >
                            Add
                        </button>
                        <button onClick={() => showAddressBoxHandler(false)}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
            <div className="bill">
                <p>
                    <strong>Price Details</strong>
                </p>
                <p>No of items: {items}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Discount: ${totalDiscount}</p>
                <p>Delivery charges: ${deliveryCharge}</p>
                <p>Net Price: ${netPrice + deliveryCharge}</p>
                <button
                    onClick={() => {
                        console.log(Object.keys(selectedAddress));
                        if (Object.keys(selectedAddress).length === 0) {
                            fillAddressNotify();
                        } else {
                            notify();
                            setOrderPlaced(true);
                        }
                    }}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;
