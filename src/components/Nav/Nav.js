import React from 'react';
import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <div className="nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/products"}>Products</Link>
        </div>
    )
}