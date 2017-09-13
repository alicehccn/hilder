export const SHOW_FEATURED = 'SHOW_FEATURED';

export function showFeatured(feature) {
  return {
    type: SHOW_FEATURED,
    feature
  }
};
