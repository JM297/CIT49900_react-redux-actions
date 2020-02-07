import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function Blog(props){

    let renderBlog = props.blog.map((p, idx)=>
        <div className="status" key={idx}>
            <h2><Link to={`blog/status/${p.id}`}>{p.title}</Link></h2>
        </div>
    );
    return(
        <div className="blog">
            <h1>Blog</h1>
            <div className="posts">
                {renderBlog}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        blog: state.blog
    }
};

export default connect(mapStateToProps)(Blog);