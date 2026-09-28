import React from "react";
import { useSelector, useDispatch } from "react-redux";

function OnlineShop() {
    const profit = useSelector((state) => state.profit?.value ?? 0);

    return (
        <div></div>
    )
}

export default OnlineShop;