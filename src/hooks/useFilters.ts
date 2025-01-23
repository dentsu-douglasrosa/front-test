import { useEffect, useMemo, useState } from "react";
import { ENDPOINTS } from "src/constants/filters";
import { AuthorFilter, CategoryFilter, Filter, FilterTypes, UseFiltersReturn } from "src/types/filters.type";
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from "react-router-dom";
import { rem } from "src/utils/units";
import { UI } from "src/constants/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/types/redux.type";
import { resetFilters, setAuthorIds, setCategoryIds } from "src/redux/slices/filter.slice";
import classNames from "classnames";

export const useFilters = (): UseFiltersReturn => {
    const [shouldShowItems, setShouldShowItems] = useState<Record<FilterTypes, boolean>>({ 
        category: false,
        author: false,
    });
    const { categoryIds, authorIds } = useSelector((state: RootState) => state.filter);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;

    const isOnPostDetails = !!id

    const [authors, setAuthors] = useState<AuthorFilter[]>([]);
    const [categories, setCategories] = useState<CategoryFilter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    const dropdownOpen: FilterTypes | undefined = useMemo(() => {
        if(shouldShowItems['author']) return "author"
        else if(shouldShowItems['category']) return "category"

        return undefined
    }, [shouldShowItems])
    
    const items: Filter[] = useMemo(() => {
        if(shouldShowItems['author']) return authors
        else if(shouldShowItems['category']) return categories
        
        return []
    }, [shouldShowItems, categories, authors])

    const isFilterIdApplied = (id: string, type: FilterTypes): boolean => {
        const filterIds = type === "author" 
            ?  authorIds
            : categoryIds

        return filterIds.includes(id)
    }
    
    const onSelectItem = (id: string, type: FilterTypes) => {
        if(categoryIds.includes(id) || authorIds.includes(id)) {
            dispatch(resetFilters())
            return
        }

        dispatch(resetFilters())
        
        if(type === "author") dispatch(setAuthorIds([id]));
        else dispatch(setCategoryIds([id]));
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch(ENDPOINTS.GET.CATEGORIES);
            if (response.ok) {
                const data: unknown = await response.json();
                if(Array.isArray(data) 
                    && typeof data[0] === 'object' 
                    && 'id' in data[0]
                    && 'name' in data[0]
                ) setCategories(data)
            }
        } catch (error) {}
    }

    const fetchAuthors = async () => {
        try {
            const response = await fetch(ENDPOINTS.GET.AUTHORS);
            if (response.ok) {
                const data: unknown = await response.json();
                if(Array.isArray(data) 
                    && typeof data[0] === 'object' 
                    && 'id' in data[0]
                    && 'name' in data[0]
                    && 'profilePicture' in data[0]
                ) setAuthors(data)
            }
        } catch (error) {}
    }

    const onApplyFilters = () => {
        // TODO
    }

    const onToggleDropdown = (type: FilterTypes) => {
        if(shouldShowItems[type]) {
            setShouldShowItems(state => ({
                category: false,
                author: false,
            }))
        } else {
            setShouldShowItems({
                category: type === "category",
                author: type === "author",
            })
        }
    }

    useEffect(() => {
        const init = async () => {
            setLoading(true)

            await fetchCategories()
            await fetchAuthors()
           
            setLoading(false);
        };

        init();
    }, []);

    return {
        state: {
            categoriesLabel: t('category'),
            authorsLabel: t('author'),
            filtersLabel: t('filtersLabel'),
            applyFiltersLabel: t('applyFilters'),
            authors,
            categories,
            loading,
            isOnPostDetails,
            applyFiltersWidth: '100%',
            shouldShowItems,
            iconRightClassNameAuthor: shouldShowItems['author'] ? "fas fa-angle-up" : "fas fa-angle-down",
            iconRightClassNameCategory: shouldShowItems['category'] ? "fas fa-angle-up" : "fas fa-angle-down",
            items,
            dropdownOpen,
            classNamesForDropdownItems: classNames("filters--mobile-group", {
                "filters--mobile-group--visible": shouldShowItems['author'] || shouldShowItems['category']
            }),
        },
        controller: {
            onSelectItem,
            onApplyFilters,
            isFilterIdApplied,
            onToggleDropdown,
        }
    }
}