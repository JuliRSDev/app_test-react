import {configureStore} from "@reduxjs/toolkit";
import {Person} from "@/models/people";
import {peopleSlice} from "@/redux/state/people";
import {favoritePeople} from "@/redux/state/favoritePeople";

export interface AppStore {
    people: Person[],
    favorites: Person[]
}

export const store = configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoritePeople.reducer
    }
});
