import { SET_ERROR, SET_LOADING, SET_LIST_REPOS, SET_REPOS_DETAIL } from "./types";

const setAction = (type, payload) => {
    return { type, payload };
};

export const getList = () => {
    return async (dispatch) => {
        try {
            dispatch(setAction(SET_LOADING, true));
            console.log("SUCCESS");
        } catch (error) {
            dispatch(setAction(SET_ERROR, error.message));
        } finally {
            dispatch(setAction(SET_LOADING, false));
        }
    };
};
