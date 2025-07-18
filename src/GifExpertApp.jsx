import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./gifGrid"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory onNewCategory={onAddCategory} />
            
            <ol>
                {categories.map((category, i) => (
                    <GifGrid key={category} category={category}/>
                ))}
            </ol>
        </>
    )
}