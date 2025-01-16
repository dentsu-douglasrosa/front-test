import React from "react";
import { Post } from "src/types/posts.type";
import "../styles/post-card.scss"

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, content, thumbnail_url, author, categories, createdAt } = post;

  return (
    <div className="post-card">
      <img src={thumbnail_url} alt={title} className="post-card-thumbnail" />
      <div className="post-card-content">
        <h2 className="post-card-title">{title}</h2>
        <p className="post-card-author">
          By {author.name} • {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="post-card-snippet">{content.slice(0, 100)}...</p>
        <div className="post-card-categories">
          {categories.map((category) => (
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
