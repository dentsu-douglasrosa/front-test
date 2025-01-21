import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetFilters, setAuthorIds, setCategoryIds } from 'src/redux/slices/filter.slice';
import { UseFilterReturn, UseFilterProps } from "src/types/filter.type"
import { RootState } from 'src/types/redux.type';

export const useFilter = (props: UseFilterProps): UseFilterReturn => {
    const { setShouldShow } = props;

    const dispatch = useDispatch();
    const { categoryIds, authorIds } = useSelector((state: RootState) => state.filter);
    const navigate = useNavigate()

    const onFilterChange = (id: string) => {
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

    return {
        state: {
            title: props.title,
            items: props.items,
            visible: props.visible,
        },
        controller: {
            onFilterChange,
            isFilterIdApplied,
            setShouldShow
        }
    }
}