import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardTypes, MovieCardType, TableDataTypes } from "../../common/types";

export type MovieReducerStateType = {
  activeTab: string;
  movieList: CardTypes[];
  trendsList: CardTypes[];
  singleMovie: MovieCardType | null;
  singleMovieLoading: boolean;
  movieCrew: TableDataTypes | null;
  relatedMovieList: MovieCardType[];
  searchResults: MovieCardType[];
  pageLoading: boolean;
  totalCount: number;
  lastPage: number;
};

const initialState = {
  activeTab: localStorage.getItem("activeTab") || "home",
  movieList: [],
  trendsList: [],
  singleMovie: null,
  singleMovieLoading: false,
  movieCrew: null,
  relatedMovieList: [],
  searchResults: [],
  pageLoading: false,
  totalCount: 0,
  lastPage: 1,
};

const movieSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
      localStorage.setItem("activeTab", action.payload);
    },
    loadMovieList: (state, action: any) => {},
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    loadTrendsList: (state, action: any) => {},
    setTrendsList: (state, action) => {
      state.trendsList = action.payload;
    },
    loadSingleMovie: (state, action) => {},
    setSingleMovie: (state, action) => {
      state.singleMovie = action.payload;
    },
    setMovieCrew: (state, action) => {
      state.movieCrew = action.payload;
    },
    setSingleMovieLoading: (state, action) => {
      state.singleMovieLoading = action.payload;
    },
    loadRelatedMovieList: (state, action) => {},
    setRelatedMovieList: (state, action) => {
      state.relatedMovieList = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    loadSearchResults: (state, action) => {},
    setPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
  },
});

export const {
  setActiveTab,
  loadMovieList,
  setMovieList,
  loadSingleMovie,
  setSingleMovie,
  setMovieCrew,
  setSingleMovieLoading,
  loadRelatedMovieList,
  setRelatedMovieList,
  setSearchResults,
  loadSearchResults,
  setPageLoading,
  loadTrendsList,
  setTrendsList,
  setTotalCount,
  setLastPage,
} = movieSlice.actions;

export default movieSlice.reducer;

export const MovieSelector = {
  getActiveTab: (state: any) => state.films.activeTab,
  getMovieList: (state: any) => state.films.movieList,
  getTrendsList: (state: any) => state.films.trendsList,
  getSingleMovie: (state: any) => state.films.singleMovie,
  getSingleMovieCrew: (state: any) => state.films.singleMovieCrew,
  getSingleMovieLoading: (state: any) => state.films.singleMovieLoading,
  getMovieCrew: (state: any) => state.films.movieCrew,
  getRelatedMovieList: (state: any) => state.films.relatedMovieList,
  getSearchResults: (state: any) => state.films.searchResults,
  getPageLoading: (state: any) => state.films.pageLoading,
  getTotalCount: (state: any) => state.films.totalCount,
  getLastPage: (state: any) => state.films.lastPage,
};
