import React from "react";
import { Post } from "src/types/posts.type";
import "../styles/post-card.scss"
import { usePostCard } from "src/hooks/usePostCard";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { state, controller } = usePostCard({ post })

  return (
    <div onClick={() => controller.onClick()} className="post-card">
      <img src={state.post.thumbnail_url} alt={state.post.title} className="post-card-thumbnail" />
      <div className="post-card-content">
        <h2 className="post-card-title">{state.post.title}</h2>
        <p className="post-card-author">
          By {state.post.author.name} • {new Date(state.post.createdAt).toLocaleDateString()}
        </p>
        <p className="post-card-snippet">{state.post.content.slice(0, 100)}...</p>
        <div className="post-card-categories">
          {state.post.categories.map((category) => (
            <span key={category.id} className="post-card-category">
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
