import { Photo, UnSplashResponse } from "."
import { GET } from "../utils/apiUtils"

const API_URL = `https://api.unsplash.com/search/photos?page=2&orientation=landscape&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&query=`

/**
 * Search UnSplash sites for photos with the given search text
 * @param _searchText 
 * @returns {Photo[]}
 */
export const getPhotos = async (_searchText: string): Promise<Photo[] | undefined> => {
    const response: UnSplashResponse = await GET(`${API_URL}${_searchText}`)
    if (response.results?.length) {
        return response.results.map((_photo: any) => {
            return {
                src: _photo.urls.small,
                alt: _photo.alt_description,
                caption: `Photo credit to '${_photo.user.name}'`
            }
        })
    }
    return Promise.resolve([])
}