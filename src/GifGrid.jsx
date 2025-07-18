import { useState, useEffect } from "react";
//  import { getGifs } from "./helpers/getGifs";
import { GitItems } from "./components/GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(({ id, title, url }) => (
                    <GitItems
                        key={id}
                        title={title}
                        url={url}
                    />
                ))}
            </div>
        </>
    );
};