import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../store/action";
export default function SearchByName(params) {
    const { listRepos, detailRepos, loading, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList());
    }, []);
    return (
        <>
            <h1>SEARCH</h1>
        </>
    );
}
