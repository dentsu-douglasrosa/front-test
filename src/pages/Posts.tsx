import React from 'react';
import '../styles/posts.scss';
import { usePosts } from '../hooks/usePosts'
import PostCard from 'src/components/PostCard';
import { PostsProps } from 'src/types/posts.type';

const Posts = (props: PostsProps): JSX.Element => {
  const { state } = usePosts(props);
  
  return (
    <div className="posts-container">
        {state.posts.map(post => {
          return <PostCard post={post} />
        })}
    </div>
  );
}

export default Posts;
