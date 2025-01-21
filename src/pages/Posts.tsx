import React from 'react';
import '../styles/posts.scss';
import { usePosts } from '../hooks/usePosts'
import PostCard from 'src/components/PostCard';
import { PostsProps } from 'src/types/posts.type';
import Filters from 'src/components/Filters';

const Posts = (props: PostsProps): JSX.Element => {
  const { state } = usePosts(props);
  
  return (
    <div className="posts-container">
        <div className='posts-grid'>
          {state.posts.map(post => {
            return <PostCard key={post.id} post={post} />
          })}
        </div>
      </div>
  );
}

export default Posts;
