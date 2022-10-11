import React from "react";
import Card from "./Card.jsx";
import '../css/postcard.css'

const PostCard = ({title, image}) => {
    return (
        <Card width="400px" height="350px" >
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