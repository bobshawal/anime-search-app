import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Anime } from '../types/anime';

export const fetchAnimeDetail = createAsyncThunk(
  'detail/fetchAnimeDetail',
  async (id: string) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    return res.data.data;
  }
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detail: null as Anime | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAnimeDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export default detailSlice.reducer;
