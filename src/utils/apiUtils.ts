/**
 * Http fetch GET call
 * 
 * @param {string} url api url
 * @param {Object} headers any headers needed
 * @returns Promise
 */
export const GET = async (url: string, headers = {}) => {
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(null);
        }
    }).catch(error => {
        console.error(error);
    });
};