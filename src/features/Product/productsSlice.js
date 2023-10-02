import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductRequest = createAsyncThunk(
  "products/fetchProductRequest",
  async (id) => {
    const response = await fetch(
      `https://spotlightmedia.amanueld.info/api/posts/${id}`
    );
    return response.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    product: {},
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductRequest.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })
      .addCase(fetchProductRequest.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
