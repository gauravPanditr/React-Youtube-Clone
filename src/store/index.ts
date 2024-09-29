import { configureStore, createSlice } from "@reduxjs/toolkit";

import { getHomePageVideos } from "./reducer/getHomePageVideos";
import { InitialState } from "../types/InitalState";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  serachResult: [],
  nextPageToken: null,
  recommendedVideos: [],
};
const YoutubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
      clearVideos:(state)=>{
            state.videos=[];
            state.nextPageToken=null;
      }
  },
  extraReducers: (builder) => {
      builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            state.videos=action.payload.parsedData;
            state.nextPageToken=action.payload.nextPageToken;

      })
  },
});

export const store = configureStore({
  reducer: {
    youtube: YoutubeSlice.reducer,


  },
});

export const {clearVideos}=YoutubeSlice.actions;



export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  // Type for Dispatch
