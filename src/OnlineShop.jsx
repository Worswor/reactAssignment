import React from "react";
import { useSelector, useDispatch } from "react-redux";

function OnlineShop() {
    const profit = useSelector((state) => state.profit?.value ?? 0);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Online Shop</h1>
        </div>
    );
}

export default OnlineShop;