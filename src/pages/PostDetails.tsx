import React from 'react';
import '../styles/post-details.scss';
import { usePostDetails } from '../hooks/usePostDetails'
import Posts from './Posts';
import moment from 'moment';
import Separator from 'src/components/Separator';

const PostDetails = (): JSX.Element => {
  const { state, controller } = usePostDetails();
  
  if(!state.post) return <div></div>

  return (
    <div className="posts-details-container">
      <div className="post-header">
          <h1 className="post-title">{state.post.title}</h1>
      </div>

      <div className="post-meta">
            <div className="author" style={{ flex: 1, flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img className="author-profile-picture" src={state.post.author.profilePicture} alt={state.post.title} />
                <div style={{ flexDirection: 'column' }}>
                  <div style={{ flexDirection: 'row' }}>
                    <span className="written-by">{state.writtenByLabel}</span>
                    <span className="author-name">{state.post.author.name}</span>
                  </div>
                  <div className="dates">
                      <span className="updated-date">{moment(new Date(state.post.updatedAt)).format("MMM DD, YYYY")}</span>
                  </div>
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
      <Separator />
      <div className='latest-articles'>
        <span className='latest-articles--title'>
          {state.labelLatestArticles}
        </span>
        <div className='latest-articles--list'>
          <Posts orderBy={"updatedAt"} limit={3} />
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
