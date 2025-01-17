import React from 'react';
import { useDispatch} from 'react-redux';
import { setAuthorIds, setCategoryIds } from 'src/redux/slices/filter.slice';
import { UseFilterReturn, UseFilterProps } from "src/types/filter.type"

export const useFilter = ({ type }: UseFilterProps): UseFilterReturn => {
    const dispatch = useDispatch();

    const setFilterSlice = type === "author"
        ? setAuthorIds
        : setCategoryIds

    const onFilterChange = (id: string) => {
        dispatch(setFilterSlice([id]));
    };
   

    return {
        state: {
        },
        controller: {
            onFilterChange,
        }
    }
}