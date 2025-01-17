import { useEffect, useState } from "react";
import { ENDPOINTS } from "src/constants/posts";
import { Post, UsePostsProps, UsePostsReturn } from "src/types/posts.type";

export const usePosts = (props: UsePostsProps): UsePostsReturn => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const sortPosts = (postsParam: Post[]): Post[] => postsParam.sort((a, b) => {
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA;
    });
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(ENDPOINTS.GET.POSTS);
                if (response.ok) {
                    let data = await response.json();

                    if(Array.isArray(data) 
                        && typeof data[0] === 'object' 
                        && 'id' in data[0]
                        && 'title' in data[0]
                        && 'content' in data[0]
                    ) 

                    if(props?.orderBy === "updatedAt") data = sortPosts(data)
                    if(props?.limit) data = data.slice(0, props?.limit)

                    setPosts(data)
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    
    return {
        state: {
            posts,
            loading,
        },
        controller: {}
    }
}