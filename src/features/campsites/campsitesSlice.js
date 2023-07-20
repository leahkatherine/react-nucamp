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

export const selectAllCampsites = () => {
    return CAMPSITES;
};
//This code is just kept for an example for your future use 
//export const selectRandomCampsite = () => {
//    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};