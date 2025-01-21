import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFilters, setAuthorIds, setCategoryIds } from 'src/redux/slices/filter.slice';
import { UseFilterReturn, UseFilterProps } from "src/types/filter.type"
import { RootState } from 'src/types/redux.type';

export const useFilter = (props: UseFilterProps): UseFilterReturn => {
    const [visible, setIsVisible] = useState(false);

    const dispatch = useDispatch();
    const { categoryIds, authorIds } = useSelector((state: RootState) => state.filter);
    const navigate = useNavigate()

    const onFilterChange = (id: string) => {
        if(categoryIds.includes(id) || authorIds.includes(id)) {
            dispatch(resetFilters())
            return
        }

        dispatch(resetFilters())
        
        if(props.type === "author") dispatch(setAuthorIds([id]));
        else dispatch(setCategoryIds([id]));
        
        navigate(`/posts`)
    };

    const isFilterIdApplied = (id: string): boolean => {
        const filterIds = props.type === "author" 
            ?  authorIds
            : categoryIds

        return filterIds.includes(id)
    }

    const onClickDropdownFilter = () => {
        setIsVisible(state => !state)
    }

    return {
        state: {
            title: props.title,
            items: props.items,
            visible,
            iconRightClassName: visible ? "fas fa-angle-up" : "fas fa-angle-down" 
        },
        controller: {
            onFilterChange,
            isFilterIdApplied,
            onClickDropdownFilter,
        }
    }
}