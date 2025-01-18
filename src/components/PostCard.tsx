import React from "react";
import { Post } from "src/types/posts.type";
import "../styles/post-card.scss"
import { usePostCard } from "src/hooks/usePostCard";
import moment from "moment";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { state, controller } = usePostCard({ post })

  return (
    <div onClick={() => controller.onClick()} className="post-card">
      <img src={state.post.thumbnail_url} alt={state.post.title} className="post-card-thumbnail" />
      <div className="post-card-content">
        <div className="post-card-content-date-author">
          <span className="post-card-content-date-author-date">
            {moment(new Date(state.post.createdAt)).format("MMM DD, YYYY")}
          </span>
          <span className="post-card-content-date-author-dot">•</span>
          <span className="post-card-content-date-author-author">
            {state.post.author.name}
          </span>
        </div>
        <h2 className="post-card-content-title">{state.post.title}</h2>
        <p className="post-card-content-snippet">{state.post.content.slice(0, 62)}...</p>
        <div className="post-card-content-categories">
          {state.post.categories.map((category) => (
            <span key={category.id} className="post-card-content-categories-category">
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
