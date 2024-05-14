import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface MenuState {
  isOpen: boolean;
  exampleState: number;
}

const initialState: MenuState = {
  isOpen: true,
  exampleState: 0,
};

export const menuSlice = createSlice({
  name: 'menu',
  // createSlice will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    // use PayloadAction<type> to declare the contents of `action.payload`
    exampleReducer: (state, action: PayloadAction<number>) => {
      state.exampleState += action.payload;
    },
  },
});

export const { toggleMenu, exampleReducer } = menuSlice.actions;
// other code like selectors can use the imported RootState type
export const selectExample = (state: RootState) => state.burgerMenu.exampleState;

export default menuSlice.reducer;
