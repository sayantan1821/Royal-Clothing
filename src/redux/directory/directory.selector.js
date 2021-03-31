import { createSelector } from 'reselect';
const selectDirectory = state => state.directory;
export const selectDirectorySeection = createSelector(
    [selectDirectory],
    directory => directory.sections
);