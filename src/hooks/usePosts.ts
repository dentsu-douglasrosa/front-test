import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ENDPOINTS } from "src/constants/posts";
import { setPosts } from "src/redux/slices/posts.slice";
import { Post, UsePostsProps, UsePostsReturn } from "src/types/posts.type";
import { RootState } from "src/types/redux.type";

export const usePosts = (props: UsePostsProps): UsePostsReturn => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state: RootState) => state.posts);
    const {
        categoryIds,
        authorIds,
        searchQuery
    } = useSelector((state: RootState) => state.filter);

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

                    dispatch(setPosts(data))
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [categoryIds, authorIds, searchQuery, dispatch]);
    
    return {
        state: {
            posts,
            loading,
        },
        controller: {}
    }
}