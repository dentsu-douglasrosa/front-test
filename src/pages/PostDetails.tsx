import React from 'react';
import '../styles/post-details.scss';
import { usePostDetails } from '../hooks/usePostDetails'
import Posts from './Posts';
import moment from 'moment';

const PostDetails = (): JSX.Element => {
  const { state, controller } = usePostDetails();
  
  if(!state.post) return <div></div>

  return (
    <div className="posts-details-container">
      <span onClick={() => controller.onClickBack()} className='post-details-back'>{state.labelBack}</span>
      <div className="post-header">
          <h1 className="post-title">{state.post.title}</h1>
      </div>
      <div className="post-meta">
          <div className="author">
              <img className="author-profile-picture" src={state.post.author.profilePicture} alt={state.post.title} />
              <div>
                <span className="author-name">{state.post.author.name}</span>
                <div className="dates">
                    <span className="updated-date">{moment(new Date(state.post.updatedAt)).format("MMM DD, YYYY")}</span>
                </div>
              </div>
          </div>
      </div>
      <div className='post-thumbnail-container'>
        <img className="post-thumbnail" src={state.post.thumbnail_url} alt={state.post.title} />
      </div>
      <div className="post-content">
          <p className="content-text">
              {state.post.content}
          </p>
      </div>
      <div>
        <span className='latest-articles-title'>
          {state.labelLatestArticles}
        </span>
        <Posts orderBy={"updatedAt"} limit={3} />
      </div>
    </div>
  );
}

export default PostDetails;
