import { useEffect, useMemo, useState } from "react";
import { ENDPOINTS } from "src/constants/filters";
import { AuthorFilter, CategoryFilter, Filter, FilterTypes, SortTypes, UseFiltersReturn } from "src/types/filters.type";
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from "react-router-dom";
import { rem } from "src/utils/units";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/types/redux.type";
import { resetFilters, setAuthorIds, setCategoryIds, setFilterIdsApplied, setSortType } from "src/redux/slices/filter.slice";
import classNames from "classnames";

export const useFilters = (): UseFiltersReturn => {
    const [shouldShowItems, setShouldShowItems] = useState<Record<FilterTypes, boolean>>({ 
        category: false,
        author: false,
    });
    const { categoryIds, authorIds, sortType} = useSelector((state: RootState) => state.filter);
    const { isMobile } = useSelector((state: RootState) => state.breakpoints);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;

    const isOnPostDetails = !!id

    const [authorNamesSelected, setAuthorNamesSelected] = useState<string|undefined>();
    const [categoryNamesSelected, setCategoryNamesSelected] = useState<string|undefined>();
    const [authors, setAuthors] = useState<AuthorFilter[]>([]);
    const [categories, setCategories] = useState<CategoryFilter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const onClickSorting = () => {
        const value: SortTypes = sortType === "newest" ? "oldest" : "newest"
        dispatch(setSortType(value))
    }
    
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
        let filterIds: string[] = []

        if(type === "author") filterIds = [...authorIds]
        else filterIds = [...categoryIds]

        if(filterIds.includes(id)) filterIds = filterIds.filter(f => f !== id)
        else filterIds.push(id)

        if(type === "author") {
            const filtersSelected = authors.filter(item => filterIds.includes(item.id))
            const filterNamesString = filtersSelected.map(filter => filter.name).join(", ")
            setAuthorNamesSelected(filterNamesString.length ? filterNamesString : undefined)

            dispatch(setAuthorIds(filterIds));
        } else {
            const filtersSelected = categories.filter(item => filterIds.includes(item.id))
            const filterNamesString = filtersSelected.map(filter => filter.name).join(", ")
            setCategoryNamesSelected(filterNamesString.length ? filterNamesString : undefined)
            
            dispatch(setCategoryIds(filterIds));
        }

        if(isMobile) dispatch(setFilterIdsApplied(filterIds));
        else dispatch(setFilterIdsApplied([]));
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
        dispatch(setFilterIdsApplied([...categoryIds, ...authorIds]));
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

    const onRemoveItems = (type: FilterTypes) => {
        if(type === "author") {
            setAuthorNamesSelected(undefined)
            dispatch(setAuthorIds([]));
        } else {
            setCategoryNamesSelected(undefined)
            dispatch(setCategoryIds([]));
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

    useEffect(() => {
        if(isMobile) dispatch(setFilterIdsApplied([...categoryIds, ...authorIds]));
    }, [isMobile])

    const iconRightClassNameAuthor = authorNamesSelected 
        ? "fa-solid fa-xmark"
        : (shouldShowItems['author'] ? "fas fa-angle-up" : "fas fa-angle-down")

    const iconRightClassNameCategory = categoryNamesSelected 
        ? "fa-solid fa-xmark"
        : (shouldShowItems['category'] ? "fas fa-angle-up" : "fas fa-angle-down")

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
            iconRightClassNameAuthor,
            iconRightClassNameCategory,
            items,
            dropdownOpen,
            classNamesForDropdownItems: classNames("filters--mobile-group", {
                "filters--mobile-group--visible": shouldShowItems['author'] || shouldShowItems['category']
            }),
            sortByType: sortType === "newest" ? t('newest') : t('oldest'),
            authorNamesSelected,
            categoryNamesSelected,
        },
        controller: {
            onSelectItem,
            onApplyFilters,
            isFilterIdApplied,
            onToggleDropdown,
            onClickSorting,
            onRemoveItems,
        }
    }
}