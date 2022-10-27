import {createSlice} from "@reduxjs/toolkit";
import {Person} from "@/models/people";
import {TypesLocalstorage} from "@/models/localstorage";
import {getPeopleLocalStorage, setFavoritePeopleLocalStorage} from "@/utilities/localstorage.utility";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getPeopleLocalStorage( TypesLocalstorage.PEOPLE )
        ? JSON.parse( getPeopleLocalStorage( TypesLocalstorage.PEOPLE ) as string )
        : initialState,
    reducers: {

        addFavoritePeople: ( state, action ) => {
            setFavoritePeopleLocalStorage( TypesLocalstorage.PEOPLE, action );
            return action.payload;
        }
    }
});
