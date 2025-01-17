import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "src/constants/posts";
import { PostDetails, UsePostDetailsProps, UsePostDetailsReturn } from "src/types/post-details.type";

export const usePostDetails = (_?: UsePostDetailsProps): UsePostDetailsReturn => {
    const { id } = useParams<{ id: string }>();

    const [post, setPost] = useState<PostDetails>();
    const [latestPosts, setLatestPosts] = useState<PostDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    const fetchLatestPosts = async () => {
        try {
            const response = await fetch(ENDPOINTS.GET.POSTS);
            if (response.ok) {
                let data = await response.json();

                if(Array.isArray(data) 
                    && typeof data[0] === 'object' 
                    && 'id' in data[0]
                    && 'title' in data[0]
                    && 'content' in data[0]
                    && 'authorId' in data[0]
                    && 'createdAt' in data[0]
                    && 'updatedAt' in data[0]
                    && 'categories' in data[0] 
                        &&  Array.isArray(data[0].categories)
                        && 'id' in data[0].categories
                    && 'author' in data[0]
                ) {
                    data =  data.slice(0, 3) // TODO
                    setLatestPosts(data)
                }
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchPost = async (id: string) => {
        try {
            const response = await fetch(`${ENDPOINTS.GET.POST}`.replace(':id', id));
            if (response.ok) {
                let data = await response.json();
                const firstObj = Array.isArray(data) ? data[0] : data
                
                if(typeof firstObj === 'object' 
                    && 'id' in firstObj
                    && 'title' in firstObj
                    && 'content' in firstObj
                    && 'authorId' in firstObj
                    && 'createdAt' in firstObj
                    && 'updatedAt' in firstObj
                    && 'author' in firstObj
                ) setPost(data)
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(!id) return
        
        const init = async () => {
            await fetchPost(id)
            await fetchLatestPosts()
        }

        init();
    }, [id]);
    
    return {
        state: {
            latestPosts,
            loading,
            post,
        },
        controller: {}
    }
}