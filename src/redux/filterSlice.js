import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  //назва поля в нашому стейті
  name: 'filter',
  //початковий стан
  initialState: '',
  //редюсери
  reducers: {
    setFilter: (state, action) => {
      //значення фільтра (пошукового запиту)
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
