import { createSlice } from "@reduxjs/toolkit";
import { Person } from "@/models/people";
import { TypesLocalstorage } from "@/models/localstorage";
import {
    getPeopleLocalStorage,
    setFavoritePeopleLocalStorage,
    setPeopleLocalStorage
} from "@/utilities/localstorage.utility";

const initialState: Person[] = [];

const localstorageTest = () => {
    const localstorageData = getPeopleLocalStorage( TypesLocalstorage.PEOPLE )
        ? JSON.parse( getPeopleLocalStorage( TypesLocalstorage.PEOPLE ) as string )
        : initialState;
    return localstorageData;
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState: localstorageTest,
    reducers: {

        addPeople: ( state, action ) => {
            setPeopleLocalStorage( TypesLocalstorage.PEOPLE, action );
            return action.payload;
        }
    }
});

export const { addPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
