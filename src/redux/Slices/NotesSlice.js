import { createSlice } from "@reduxjs/toolkit";
const initstate = {
  notes: [
    {
      title: "First Note ❤",
      text: "My Name Is Mahmoud Mohamed 🥰 And my age is 21 years 😊",
      id: 0,
    },
    {
      title: "Second Note ❤",
      text: "I am a student at the Faculty of Computers and Artificial Intelligence 🎈, Sohag University And I study software engineering 🌚",
      id: 1,
    },
  ],
  count: 2,
};
const NoteslSlice = createSlice({
  name: "notes",
  initialState: initstate,
  reducers: {
    add(state, action) {
      state.notes.push(action.payload);
      state.count++;
    },
    deletes(state, action) {
      const find = state.notes.find((e) => {
        return e.id === action.payload;
      });
      const index = state.notes.indexOf(find);
      state.notes.splice(index, 1);
      state.count--;
    },
  },
});
export const { add, deletes } = NoteslSlice.actions;
export default NoteslSlice.reducer;
