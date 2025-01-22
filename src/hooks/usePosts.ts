import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ENDPOINTS } from "src/constants/posts";
import { resetFilters } from "src/redux/slices/filter.slice";
import { resetPosts, setPosts } from "src/redux/slices/posts.slice";
import { SortTypes } from "src/types/filters.type";
import { Post, UsePostsProps, UsePostsReturn } from "src/types/posts.type";
import { RootState } from "src/types/redux.type";

export const usePosts = (props: UsePostsProps): UsePostsReturn => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state: RootState) => state.posts);
    const {
        authorIds,
        categoryIds,
        searchQuery,
        sortType,
    } = useSelector((state: RootState) => state.filter);

    const [loading, setLoading] = useState<boolean>(true);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

    const shouldUseFilteredPosts: boolean = useMemo(() => {
        return !!categoryIds.length
            || !!authorIds.length
            || !!searchQuery.length
    }, [categoryIds, authorIds, searchQuery])
    
    const sortPosts = (postsParam: Post[], type: SortTypes): Post[] => {
        const postsCopy = [...postsParam];

        return postsCopy.sort((a, b) => {
            const dateA = new Date(a.updatedAt).getTime();
            const dateB = new Date(b.updatedAt).getTime();
    
            if (type === "newest") return dateB - dateA;
            else if (type === "oldest") return dateA - dateB;

            return 0;
        });
    };

    const filterPosts = (posts: Post[]) => {
        if(!categoryIds.length 
            && !authorIds.length
            && !searchQuery.length
        ){
            return
        }

        let filteredPosts: Post[] = []

        posts.forEach(post => {
            if(!!categoryIds.length && !!post.categories.length){
                const postHasCategories = post.categories.map(postCat => postCat.id).every(postCatId => categoryIds.includes(postCatId))
                if(postHasCategories) filteredPosts.push(post)
            } 
        
            if(!!authorIds.length && post.author){
                const postHasAuthor = authorIds.includes(post.author.id)
                if(postHasAuthor) filteredPosts.push(post)
            }

            if(!!searchQuery.length){
                filteredPosts = posts.filter(
                    post => post.title
                        .toLocaleLowerCase()
                        .includes(searchQuery.toLocaleLowerCase())
                )
            }
        })

        const uniqueItems: Post[] = Array.from(
            new Set(filteredPosts.map((item) => JSON.stringify(item)))
        ).map((itemString) => JSON.parse(itemString));

        setFilteredPosts(uniqueItems)
    }

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

                    if(props?.orderBy === "updatedAt") data = sortPosts(data, "newest")
                    if(props?.limit) data = data.slice(0, props?.limit)

                    dispatch(setPosts(data))
                    filterPosts(data)
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [dispatch]);

    useEffect(() => {
        if(!posts.length || !sortType) return
        
        dispatch(setPosts(sortPosts(posts, sortType)))
    }, [sortType]);

    useEffect(() => {
        filterPosts(posts)
    }, [categoryIds, authorIds, searchQuery]);
    
    return {
        state: {
            posts: shouldUseFilteredPosts ? filteredPosts : posts,
            loading,
        },
        controller: {}
    }
}