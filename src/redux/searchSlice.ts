import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Anime } from '../types/anime';

export const fetchAnime = createAsyncThunk(
  'search/fetchAnime',
  async ({ query, page }: { query: string; page: number }, { signal }) => {
    const controller = new AbortController();
    signal.addEventListener('abort', () => controller.abort());

    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&page=${page}`, {
      signal: controller.signal,
    });
    return res.data;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    page: 1,
    results: [] as Anime[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAnime.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload.data;
      })
      .addCase(fetchAnime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const { setQuery, setPage } = searchSlice.actions;
export default searchSlice.reducer;
