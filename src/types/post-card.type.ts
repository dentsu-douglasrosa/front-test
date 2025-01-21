import { UseProps } from "./_shared.type"
import { Post } from "./posts.type"

export interface UsePostCardProps {
    post: Post
}

export interface PostCardProps {
    post: Post
}

export interface UsePostCardReturn extends UseProps {
    state: UseProps["state"] & {
        post: Post
    }
    controller: UseProps["controller"] & {
        onClick: () => void
    }
}
