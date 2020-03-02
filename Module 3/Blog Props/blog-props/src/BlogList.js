import React from 'react';
import BlogPost from './BlogPost.js';
import blogposts from './blogposts.js';

function BlogList(){
    const posts = blogposts.map(post => 
        <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>
    )
    return (
        <div>
            {posts}
            <div id="older-posts">OLDER POSTS</div>
            <hr/>
        </div>
    )
}

export default BlogList;