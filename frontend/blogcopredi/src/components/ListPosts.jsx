import React from "react";
import propTypes from "prop-types";
import PostCard from "./common/PostCard.jsx";
import './css/list.css'

const ListPosts = ({posts}) => {
    return (
        <div className="list-posts-wrapper">
            {posts.map((post, index) => (
                <PostCard key={index} title={post.title} image={post.image}/>
            ))}
        </div>
    );
}

ListPosts.propTypes = {
    posts: propTypes.array
}

export default ListPosts;
