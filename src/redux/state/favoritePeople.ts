import { createSlice } from "@reduxjs/toolkit";
import { Person } from "@/models/people";
import { TypesLocalstorage } from "@/models/localstorage";
import { getPeopleLocalStorage, setFavoritePeopleLocalStorage } from "@/utilities/localstorage.utility";

const initialState: Person[] = [];

export const favoritePeople = createSlice({
   name: 'favorites',
   initialState: getPeopleLocalStorage( TypesLocalstorage.FAVORITES )
       ? JSON.parse( getPeopleLocalStorage( TypesLocalstorage.FAVORITES ) as string )
       : initialState,
   reducers: {

       addFavoritePeople: ( state, action ) => {
           setFavoritePeopleLocalStorage( TypesLocalstorage.FAVORITES, state );
           return action.payload;
       }
   }
});

export const { addFavoritePeople } = favoritePeople.actions;
