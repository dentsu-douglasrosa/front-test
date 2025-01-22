import { UseMainReturn, UseMainProps } from "src/types/main.type";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export const useMain = (_?: UseMainProps): UseMainReturn => {
    const { t } = useTranslation();
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;

    const isOnPostDetails = !!id

    return {
        state: {
            isOnPostDetails,
            mainLabel: t('dwsBlog'),
            sortByLabel: t('sortBy')
        },
        controller: {
        }
    }
}