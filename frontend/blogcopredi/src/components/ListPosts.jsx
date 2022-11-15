import React from "react";
import propTypes from "prop-types";
import PostCard from "./common/PostCard.jsx";


const ListPosts = ({posts}) => {
    return (
        <div className="list-posts-wrapper">
            <div className="list-posts">
                {posts.map((post, index) => (
                    <PostCard key={index} title={post.title} image={post.image}/>
                ))}
            </div>

        </div>
    );
}

ListPosts.propTypes = {
    posts: propTypes.array
}

export default ListPosts;
