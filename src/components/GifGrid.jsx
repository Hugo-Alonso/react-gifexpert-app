import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ClipLoader } from 'react-spinners';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3>{ category }</h3>
            
            <div className="card-grid"> {
                isLoading 
                ? <ClipLoader /> 
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
