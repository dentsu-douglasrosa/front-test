import { UsePostCardReturn, UsePostCardProps} from "src/types/post-card.type";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { resetFilters } from "src/redux/slices/filter.slice";

export const usePostCard = ({ post }: UsePostCardProps): UsePostCardReturn => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(resetFilters())
        navigate(`/posts/${post.id}`)
    }

    return {
        state: {
            post,
        },
        controller: {
            onClick,
        }
    }
}