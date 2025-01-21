import { UseSidebarReturn, UseSidebarProps } from "src/types/sidebar.type";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const useSidebar = (_?: UseSidebarProps): UseSidebarReturn => {
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const match = location.pathname.match(/\/posts\/([^/]+)/);
    const id = match ? match[1] : null;

    const isOnPostDetails = !!id

    const { t } = useTranslation();

    const navigate = useNavigate()

    const onClickBack = () => {
        navigate(`/posts`)
    }

    return {
        state: {
            isOnPostDetails,
            labelBack: t('back'),
        },
        controller: {
            onClickBack,
        }
    }
}