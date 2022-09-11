import React from 'react'
import { Skeleton } from 'antd'
import { Photo } from '../models'

const PhotoCard = ({ photo }: { photo: Photo }) => {
    const Photo = () => {
        if (photo) {
            return <figure className='card-photo relative w-full h-full'>
                <img src={photo.src} alt={photo.alt}
                    className='w-full h-full' />
                <figcaption
                    className='absolute bottom-0 left-0 right-0 px-4 py-5 bg-gray-800 opacity-70'>
                    <span className='text-white capitalize'>{photo.caption}</span>
                </figcaption>
            </figure>
        }

        return <Skeleton.Image style={{ height: '300px', width: '300px' }} active={true} />
    }
    return <Photo />
}

export default PhotoCard