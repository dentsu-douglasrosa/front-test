import { UseSidebarReturn, UseSidebarProps } from "src/types/sidebar.type";
import { useNavigate, useParams } from 'react-router-dom';

export const useSidebar = (_?: UseSidebarProps): UseSidebarReturn => {
    const { id } = useParams<{ id: string }>();
    const isOnPostDetails = !!id

    const navigate = useNavigate()

    const onClickBack = () => {
        navigate(`/posts`)
    }

    return {
        state: {
            isOnPostDetails,
        },
        controller: {
            onClickBack,
        }
    }
}