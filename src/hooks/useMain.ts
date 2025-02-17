import { UseMainReturn, UseMainProps } from "src/types/main.type";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "src/types/redux.type";
import { SortTypes } from "src/types/filters.type";
import { setSortType } from "src/redux/slices/filter.slice";
import { useEffect } from "react";
import { BREAKPOINTS } from "src/constants/breakpoints";
import { setIsMobile } from "src/redux/slices/breakpoints.slice";

export const useMain = (_?: UseMainProps): UseMainReturn => {
    const { t } = useTranslation();

    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;
    const isOnPostDetails = !!id

    const dispatch = useDispatch()

    const { sortType } = useSelector((state: RootState) => state.filter);

    const onClickSorting = () => {
        const value: SortTypes = sortType === "newest" ? "oldest" : "newest"
        dispatch(setSortType(value))
    }

    const onChangeMedia = (mediaEvent: MediaQueryListEvent| MediaQueryList) => {
        dispatch(setIsMobile(mediaEvent.matches));
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS["$breakpoint-md"]})`);

        onChangeMedia(mediaQuery)

        mediaQuery.addEventListener("change", onChangeMedia);
    }, [])

    return {
        state: {
            isOnPostDetails,
            mainLabel: t('dwsBlog'),
            sortByLabel: t('sortBy'),
            sortByType: sortType === "newest" ? t('newest') : t('oldest'),
            
        },
        controller: {
            onClickSorting,
        }
    }
}