import React from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

function StatusPage(props) {

    const returnPrd = b =>{
        return b.id === props.match.params.id;
    };

    const b = props.blog.find(returnPrd);

    return (
        <div className="status" key={b.id}>
            <h1>{b.title}</h1>
            {b.text}<br/>
            <button><Link to={"/blog"}>Return to Blog</Link></button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        blog: state.blog
    }
};

export default connect(mapStateToProps)(StatusPage);