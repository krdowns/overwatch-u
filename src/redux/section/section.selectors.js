import { createSelector } from "reselect";

const selectSection = state => state.section;

export const selectCollections = createSelector(
  [selectSection],
  section => section.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectSection],
  section => section.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectSection],
  section => !!section.collections
);
