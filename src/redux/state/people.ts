import { createSlice } from "@reduxjs/toolkit";
import { Person } from "@/models/people";
import { TypesLocalstorage } from "@/models/localstorage";
import { getPeopleLocalStorage, setPeopleLocalStorage } from "@/utilities/localstorage.utility";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getPeopleLocalStorage( TypesLocalstorage.PEOPLE )
        ? JSON.parse( getPeopleLocalStorage( TypesLocalstorage.PEOPLE ) as string )
        : initialState,
    reducers: {

        addPeople: ( state, action ) => {
            setPeopleLocalStorage( TypesLocalstorage.PEOPLE, state );
            return action.payload;
        }
    }
});

export const { addPeople } = peopleSlice.actions;
