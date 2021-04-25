import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Hola']);
    //     console.log(categories)
    // }

    return (
        <>
            <h2 className="title">Gif Expert App</h2>
            <AddCategory setCategories= { setCategories }/>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    )
                } 
            </ol>
        </>
    )
}
