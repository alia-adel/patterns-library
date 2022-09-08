import React, { Suspense } from 'react'
import { Photo } from '../models'
import Loader from './Loader'


const PhotoCard = React.lazy(() => import('./PhotoCard'))

const PhotosList = ({ list }: { list: any }) => {

    const ListItem = ({ photo, index }: { photo: Photo, index: number }) => {
        return <li key={`${photo.caption}_${index}`} className='list-item flex col items-stretch h-full w-full'>
            <PhotoCard photo={photo} />
        </li>
    }

    return <Suspense fallback={<Loader />}>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {list.map((_photo: Photo, index: number) =>
                <ListItem photo={_photo} index={index} />
            )}
        </ul>
    </Suspense>
}

export default PhotosList