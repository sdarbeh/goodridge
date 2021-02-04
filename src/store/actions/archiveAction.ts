export const SET_ARCHIVE_SORT= 'SET_ARCHIVE_SORT'
export const SET_ARCHIVE_DISPLAY= 'SET_ARCHIVE_DISPLAY'

export const setArchiveSort = (sort: string) => {
    return { type: SET_ARCHIVE_SORT, sort };
};

export const setArchiveDisplay = (display: string) => {
    return { type: SET_ARCHIVE_DISPLAY, display };
};