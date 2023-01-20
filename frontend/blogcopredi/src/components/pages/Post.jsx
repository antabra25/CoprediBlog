import React from "react";
import Main from "../layout/Main.jsx";

const Post = ({title, content, image}) => {
    return (
        <Main>
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
        </Main>

    )
}

export default Post;