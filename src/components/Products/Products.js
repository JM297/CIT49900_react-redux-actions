import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Products(props){
    console.log(props.products.length);
    let renderItems = props.products.map((p, idx) =>
        <div key={idx} className="item">
            <h2><Link to={`products/item/${p.id}`}>Item {p.id}: {p.name}</Link></h2>
        </div>
    );
    if(props.products.length > 0){
        return(
            <div className="products">
                <h1>Products</h1>
                {renderItems}
            </div>
        )
    } else {
        return(
            <div className="products">
                <h1>Store is empty</h1>
                <h3>Please check back later once we get more Products in stock.</h3>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
};

export default connect(mapStateToProps)(Products);