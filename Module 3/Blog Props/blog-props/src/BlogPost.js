import React from 'react';

function BlogPost(props){
    return(
        <div id="blogpost-container">
            <h1 id="blogpost-header">{props.title}</h1>
            <h3 id="blogpost-subheader">{props.subTitle}</h3>
            <p id="blogpost-author">Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default BlogPost;