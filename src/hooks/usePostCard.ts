import { UsePostCardReturn, UsePostCardProps} from "src/types/post-card.type";
import { useNavigate } from 'react-router-dom';

export const usePostCard = ({ post }: UsePostCardProps): UsePostCardReturn => {
    const navigate = useNavigate()

    const onClick = () => {
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