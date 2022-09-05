import { SET_ERROR, SET_LOADING, SET_LIST_REPOS, SET_REPOS_DETAIL } from "./types";

const initial_state = {
    listRepos: [],
    detailRepos: {},
    loading: false,
    error: null,
};
export default function dataReducer(state = initial_state, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_LIST_REPOS:
            return { ...state, listRepos: payload };
        case SET_REPOS_DETAIL:
            return { ...state, detailRepos: payload };
        case SET_LOADING:
            return { ...state, loading: payload };
        case SET_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
}
