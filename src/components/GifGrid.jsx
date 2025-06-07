import { useEffect, useState } from 'react'
import getGifs from '../helpers/getGifs'
import GiftItem from '../components/GiftItem'
import useFetchGif from '../hooks/useFetchGifs'


const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGif(category)



    return (
        <>
            <h3>{category}</h3>
            {
                isLoading
                ?
                <h2>Cargando...</h2>
                :
                null
            }
            


            <div className='card-grid'>
                {images.map((image) => (
                    <GiftItem key={image.id} {...image}/>
                ))}
            </div>


        </>
    )
}

export default GifGrid;