import { UseProps } from "./global.type"

export interface Post {
    id: string
    title: string
    content: string
    thumbnail_url: string
    authorId: string
    createdAt: string
    updatedAt: string
    categories: Category[]
    author: Author
}

export interface Category {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    postId: string
}

export interface Author {
    id: string
    name: string
    profilePicture: string
    createdAt: string
    updatedAt: string
}

export interface PostsProps {
    orderBy?: "updatedAt"
    limit?: number
}

export type UsePostsProps = PostsProps | undefined

export interface UsePostsReturn extends UseProps {
    state: UseProps["state"] & {
        posts: Post[]
        loading: boolean
    }
    controller: UseProps["controller"] & {}
}
