import React from 'react';
import '../styles/post-details.scss';
import { usePostDetails } from '../hooks/usePostDetails'
import Posts from './Posts';

const PostDetails = (): JSX.Element => {
  const { state, controller } = usePostDetails();
  
  if(!state.post) return <div></div>

  return (
    <div className="posts-details-container">
        <h1>{state.post.title}</h1>
        <img src={state.post.thumbnail_url} alt={state.post.title} className="post-details-thumbnail" />
        <div>
          <Posts orderBy={"updatedAt"} limit={3} />
        </div>
    </div>
  );
}

export default PostDetails;
