import { UseProps } from "./_shared.type"
import { Post } from "./posts.type"

export interface PostDetails extends Post {}

export interface UsePostDetailsProps {
    post: Post
}

export interface PostDetailsProps {
    post: Post
}

export interface UsePostDetailsReturn extends UseProps {
    state: UseProps["state"] & {
        latestPosts: Post[]
        loading: boolean
        post: PostDetails | undefined
    }
    controller: UseProps["controller"] & {}
}
