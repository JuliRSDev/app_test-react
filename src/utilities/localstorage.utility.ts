
export const getPeopleLocalStorage = ( key: string ) => {
    return localStorage.getItem( key );
}

export const setPeopleLocalStorage = ( key: string, action: any ) => {
    return localStorage.setItem( key, JSON.stringify(action) );
}

export const setFavoritePeopleLocalStorage = ( key: string, action: any ) => {
    return localStorage.setItem( key, JSON.stringify(action) );
}

