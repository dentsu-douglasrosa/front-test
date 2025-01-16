import { useEffect, useState } from "react";
import { ENDPOINTS } from "src/constants/posts";
import { Post } from "src/types/posts.type";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(ENDPOINTS.GET.POSTS);
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);
    
    return {
        posts,
        loading,
    }
}