import { useEffect, useState } from "react";
import { ENDPOINTS } from "src/constants/filters";
import { AuthorFilter, CategoryFilter, UseFiltersReturn } from "src/types/filters.type";

export const useFilters = (): UseFiltersReturn => {
    const [authors, setAuthors] = useState<AuthorFilter[]>([]);
    const [categories, setCategories] = useState<CategoryFilter[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [shouldShowCategories, setShouldShowCategories] = useState(false);
    const [shouldShowAuthors, setShouldShowAuthors] = useState(false);

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
            categoriesLabel: "Categories",
            authorsLabel: "Authors",
            authors,
            categories,
            loading,
            shouldShowCategories,
            shouldShowAuthors,
        },
        controller: {
            setShouldShowCategories,
            setShouldShowAuthors
        }
    }
}