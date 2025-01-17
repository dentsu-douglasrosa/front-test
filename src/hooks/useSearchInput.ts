import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from 'src/redux/slices/filter.slice';
import { RootState } from 'src/types/redux.type';
import { UseSearchInputReturn } from "src/types/search-input.type";

export const useSearchInput = (): UseSearchInputReturn => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.filter.searchQuery);
    
    const [query, setQuery] = useState(searchQuery);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        dispatch(setSearchQuery(newQuery));
    };

    return {
        state: {
            query,
        },
        controller: {
            handleSearchChange,
        }
    }
}