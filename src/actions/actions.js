export const SHOW_FEATURED = 'SHOW_FEATURED';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';

export function showFeatured(feature) {
  return {
    type: SHOW_FEATURED,
    feature
  }
};

export function getCurrentLocation(location) {
  return {
    type: GET_CURRENT_LOCATION,
    location
  }
};
