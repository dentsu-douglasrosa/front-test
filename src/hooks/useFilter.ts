import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFilters, setAuthorIds, setCategoryIds } from 'src/redux/slices/filter.slice';
import { UseFilterReturn, UseFilterProps } from "src/types/filter.type"
import { FilterTypes } from 'src/types/filters.type';
import { RootState } from 'src/types/redux.type';

export const useFilter = (props: UseFilterProps): UseFilterReturn => {
    // const dispatch = useDispatch();
    // const { categoryIds, authorIds } = useSelector((state: RootState) => state.filter);
    // const navigate = useNavigate()

    return {
        state: {
            title: props.title,
            items: props.items,
            type: props.type,
            iconRightClassName: props.iconRightClassName,
        },
        controller: {
            onSelectItem: props.onSelectItem,
            isFilterIdApplied: props.isFilterIdApplied,
            onToggleDropdown: props.onToggleDropdown,
            onRemoveItems: props.onRemoveItems,
        }
    }
}