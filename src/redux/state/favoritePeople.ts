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
           setFavoritePeopleLocalStorage( TypesLocalstorage.FAVORITES, action.payload );
           return action.payload;
       },

       removeFavoritePeople: ( state, action ) => {
           const filteredState = state.filter( ( p: Person ) => p.id !== action.payload.id );
           setFavoritePeopleLocalStorage( TypesLocalstorage.FAVORITES, filteredState );
           return filteredState;
       }
   }
});

export const { addFavoritePeople, removeFavoritePeople } = favoritePeople.actions;
