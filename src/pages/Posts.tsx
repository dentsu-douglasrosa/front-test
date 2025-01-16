import React, { useEffect } from 'react';
import '../styles/posts.scss';
import { usePosts } from '../hooks/usePosts'
import PostCard from 'src/components/PostCard';

const Posts = (): JSX.Element => {
  const { posts } = usePosts();
  
  return (
    <div className="posts-container">
        {posts.map(post => {
          return <PostCard post={post} />
        })}
    </div>
  );
}

export default Posts;
