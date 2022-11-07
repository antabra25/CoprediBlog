import React from "react";
import MainWrapper from "../common/MainWrapper.jsx";

const Post = ({title, content, image}) => {
    return (
        <MainWrapper>
            <div>
                <h1 className="post-title">{title}</h1>
                <figure className="">
                    <img src={image} alt={title}/>
                </figure>

                <div className="post-content-wrapper">
                <pre>
                    {content}
                </pre>
                </div>
            </div>
        </MainWrapper>

    )
}

export default Post;