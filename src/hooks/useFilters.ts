import { useEffect, useState } from "react";
import { ENDPOINTS } from "src/constants/filters";
import { AuthorFilter, CategoryFilter, UseFiltersReturn } from "src/types/filters.type";
import { useTranslation } from 'react-i18next';
import { useParams, useLocation } from "react-router-dom";
import { rem } from "src/utils/units";
import { UI } from "src/constants/ui";

export const useFilters = (): UseFiltersReturn => {
    const { t } = useTranslation();
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;

    const isOnPostDetails = !!id

    const [authors, setAuthors] = useState<AuthorFilter[]>([]);
    const [categories, setCategories] = useState<CategoryFilter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
            categoriesLabel: t('categories'),
            authorsLabel: t('authors'),
            filtersLabel: t('filtersLabel'),
            applyFiltersLabel: t('applyFilters'),
            authors,
            categories,
            loading,
            isOnPostDetails,
            applyFiltersWidth: rem(UI.SIDEBAR.WIDTH)
        },
        controller: {
            onApplyFilters,
        }
    }
}