import React, { Suspense, useEffect, useState } from 'react'
import { Photo } from '../models'
import { getCategoriesPhotos, getSubCategoriesPhotos } from '../models/PhotosModel'
import Loader from './Loader'

const PhotoCard = React.lazy(() => import('./PhotoCard'))

const PhotosList = () => {
    const [list, setList] = useState<Photo[]>([])
    useEffect(() => {
        async function getPhotoList() {
            const response: Photo[] = await getSubCategoriesPhotos('decor')
            if (response.length) {
                setList(response)
            }
        }
        getPhotoList()
    }, [])
    return <Suspense fallback={<Loader />}>
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            { list && 
                list.map((_photo: Photo, index: number) =>
                    <li key={`${_photo.caption}_${index}`}>
                        <PhotoCard photo={_photo} />
                    </li>
                )
            }
        </ul>
    </Suspense>
}

export default PhotosList