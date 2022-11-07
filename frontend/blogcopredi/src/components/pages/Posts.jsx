import React from "react";
import MainWrapper from "../common/MainWrapper";
import ListPosts from "../ListPosts";
import InputSearch from "../common/InputSearch";

const Posts = () => {
    return (
        <MainWrapper>
            <h1 className="font-bold text-4xl text-left ml-32 mt-16">Posts</h1>
            <InputSearch placeholder="Buscar.." className="ml-32 mt-4"/>
            <ListPosts posts={[{
                title: "Soy un titulo particular con varial lineas de texto",
                image: "https://images.pexels.com/photos/4759915/pexels-photo-4759915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
                {
                    title: "Soy un titulo particular con varial lineas de texto",
                    image: "https://cdn.pixabay.com/photo/2022/10/04/16/00/butterfly-7498583_960_720.jpg"
                },
                {
                    title: "Soy un titulo particular con varial lineas de texto",
                    image: "https://cdn.pixabay.com/photo/2022/10/03/13/26/flower-7495870_960_720.jpg"
                },
                {
                    title: "Soy un titulo particular con varial lineas de texto",
                    image: "https://images.pexels.com/photos/4759915/pexels-photo-4759915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
               ]}/>
        </MainWrapper>
    );
};

export default Posts;
