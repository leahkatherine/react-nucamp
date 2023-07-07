import { CAMPSITES } from '../../app/shared/CAMPSITES';

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