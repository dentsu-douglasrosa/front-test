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
