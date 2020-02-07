import React from "react";
import {Link} from 'react-router-dom'

export default function NotAnItem() {
        return (
            <div className="notAnItem">
                <h1>This Product is unavailable</h1>
                <h3>You're seeing this message because the product does not exist, or it is currently out of stock.</h3>
                <button><Link to={"/products"}>Return to Products</Link></button>
            </div>
        )
}
