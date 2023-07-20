import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;
//since the key and the object name are the same you can write ititial state once

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};
//This code is just kept for an example for your future use 
//export const selectRandomCampsite = () => {
//    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};