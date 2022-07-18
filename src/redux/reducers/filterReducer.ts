import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieCardType } from "../../common/types";

export type FilterInitialStateType = {
  isFilterVisible: boolean;
  filterStatus: boolean;
  filteredList: MovieCardType[];
  type: string;
  genres: string[] | null;
  released: {};
  score: {};
  country: string;
};

const initialState: FilterInitialStateType = {
  isFilterVisible: true,
  filterStatus: false,
  filteredList: [],
  type: "",
  genres: null,
  released: {
    yearsFrom: null,
    yearsTo: null,
  },
  score: {
    ratingFrom: null,
    ratingTo: null,
  },
  country: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterVisible: (state, action) => {
      state.isFilterVisible = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
    setFiltersCountry: (state, action) => {
      state.country = action.payload;
    },
    setFiltersGenres: (state, action) => {
      state.genres = action.payload.join();
    },
    setFiltersType: (state, acton) => {
      state.type = acton.payload;
    },
    setReleasedFrom: (state: any, acton: any) => {
      state.released.yearsFrom = acton.payload;
    },
    setReleasedTo: (state: any, acton: any) => {
      state.released.yearsTo = acton.payload;
    },
    setScoreFrom: (state: any, acton: any) => {
      state.score.ratingFrom = acton.payload;
    },
    setScoreTo: (state: any, acton: any) => {
      state.score.ratingTo = acton.payload;
    },
  },
});

export const {
  setFilterVisible,
  setFilterStatus,
  setFilteredList,
  setFiltersCountry,
  setFiltersGenres,
  setFiltersType,
  setReleasedFrom,
  setReleasedTo,
  setScoreFrom,
  setScoreTo,
} = filterSlice.actions;

export default filterSlice.reducer;

export const FilterSelectors = {
  getFilterVisible: (state: any) => state.filter.isFilterVisible,
  getFilterStatus: (state: any) => state.filter.filterStatus,
  getFilteredList: (state: any) => state.filter.filteredList,
  getFiltersCountry: (state: any) => state.filter.country,
  getFiltersGenres: (state: any) => state.filter.genres,
  getFiltersType: (state: any) => state.filter.type,
  getReleased: (state: any) => state.filter.released,
  getScore: (state: any) => state.filter.score,
};
