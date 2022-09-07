import { CATEGORIES, Photo, UnSplashResponse } from "."
import { GET } from "../utils/apiUtils"

const API_URL = `https://api.unsplash.com/search/photos?page=2&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=`

const getPhoto = async (_category: string, _subCategory?: string): Promise<Photo | null> => {
    const response: UnSplashResponse = await GET(`${API_URL}${_category} ${_subCategory}`)
    if (response.results?.length) {
        return {
            src: response.results[0].urls.small,
            alt: response.results[0].alt_description,
            caption: _subCategory ? _subCategory : _category
        }
    }
    return Promise.resolve(null)
}
export const getCategoriesPhotos = async () => {
    let photosList: any[] = []
    try {
        for (let i = 0; i < Object.keys(CATEGORIES).length; i++) {
            const photo = await getPhoto(Object.keys(CATEGORIES)[i])
            if (photo) {
                photosList.push(photo)
            }
        }
    } catch (error) {
        console.error(error)
    }
    return photosList
}

export const getSubCategoriesPhotos = async (_category: string) => {
    let photosList: any[] = []
    try {
        for (let i = 0; i < CATEGORIES[_category].length; i++) {
            const photo = await getPhoto(_category, CATEGORIES[_category][i])
            if (photo) {
                photosList.push(photo)
            }
        }
    } catch (error) {
        console.error(error)
    }
    return photosList
}