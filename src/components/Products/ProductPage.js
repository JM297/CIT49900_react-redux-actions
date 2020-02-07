import React from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {changeColor, deleteItem} from "../../redux/actions/setActions";
import NotAnItem from "./NotAnItem";

function ProductPage(props) {

    const returnPrd = prd =>{
        return prd.id === props.match.params.id;
    };

    const prd = props.products.find(returnPrd);
    const idx = props.products.findIndex(returnPrd);
    // console.log(idx);
    // console.log(props.products);

    if(prd){
        return (
            <div className="item" key={prd.id}>
                <h1>{prd.name}</h1>
                <h3>{prd.subHeader}</h3>
                <button onClick={()=>props.changeColor(`${prd.color}`)}>Change colors</button>
                <button onClick={()=>props.changeColor("Cornsilk")}>Reset color</button><br/><br/>
                <button onClick={()=>props.deleteItem(idx)}>Delete this item</button><br/><br/>
                <button><Link to={"/products"}>Return to Products</Link></button>
            </div>
        )
    } else {
        return (
            <NotAnItem/>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products,
        color: state.color
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteItem:(index)=>{
            dispatch(deleteItem(index));
        },
        changeColor:(color)=>{
            dispatch(changeColor(color))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);