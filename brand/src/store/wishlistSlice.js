const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    wishAdd(state, action) {
      state.push(action.payload);
    },
    wishRemove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { wishAdd, wishRemove } = wishlistSlice.actions;
export default wishlistSlice.reducer;
