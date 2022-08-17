import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./Slices/NotesSlice";
const store = configureStore({reducer:{
    NotesReduce:NotesSlice,
}});
export default store