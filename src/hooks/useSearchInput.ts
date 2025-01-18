import { t } from 'i18next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setAuthorIds, setCategoryIds, setSearchQuery } from 'src/redux/slices/filter.slice';
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
        dispatch(setCategoryIds([]));
        dispatch(setAuthorIds([]));
    };

    const onClickButton = () => {
    };

    return {
        state: {
            query,
            inputPlaceholder: t('inputPlaceholder'),
        },
        controller: {
            handleSearchChange,
            onClickButton,
        }
    }
}