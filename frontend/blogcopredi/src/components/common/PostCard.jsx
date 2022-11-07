import React from "react";
import Card from "./Card.jsx";


const PostCard = ({title, image}) => {
    return (
        <Card width="350px" height="350px">
            <div className="post-card-wrapper">
                <div className="post-card-image-wrapper">
                    <img className="post-card-image" src={image} alt="post-card-image"/>
                </div>
                <h1 className="post-card-title">{title}</h1>
            </div>
        </Card>
    );
}

export default PostCard;