import React from "react";
import { useSelector, useDispatch } from "react-redux";

function OnlineShop() {
    const profit = useSelector((state) => state.profit?.value ?? 0);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Online Shop</h1>
            <p>Total Profit: ${profit.toFixed(2)}</p>
        </div>
    );
}

export default OnlineShop;