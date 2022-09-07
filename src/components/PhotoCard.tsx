import { Skeleton, Typography } from 'antd'
import React from 'react'
import { Photo } from '../models'
const { Title } = Typography
const PhotoCard = ({ photo }: { photo: Photo }) => {

    const Photo = () => {
        if (photo) {
            return <figure className='card-photo relative h-full'>
                <img src={photo.src} alt={photo.alt}
                    className='w-full h-full' />
                <figcaption
                    className='absolute bottom-0 left-0 right-0 h-[85px] px-4 py-5 bg-gray-800 opacity-70'>
                    <Title level={3}><span className='text-white capitalize'>{photo.caption}</span></Title>
                </figcaption>
            </figure>
        }

        return <Skeleton.Image style={{ width: '100%' }} active={true} />
    }
    return <Photo />
}

export default PhotoCard