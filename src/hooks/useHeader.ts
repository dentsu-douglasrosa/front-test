import { UseHeaderReturn, UseHeaderProps } from "src/types/header.type";
import { useNavigate } from 'react-router-dom';

export const useHeader = (_?: UseHeaderProps): UseHeaderReturn => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate(`/`)
    }

    return {
        state: {
        },
        controller: {
            onClick,
        }
    }
}