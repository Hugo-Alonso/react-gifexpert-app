import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import React from 'react';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            
            <div className="card-grid"> {
                isLoading 
                ? <ClipLoader aria-label='spinner'/> 
                : 
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
