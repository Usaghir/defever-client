import React from "react";
import CommentList from "../comments/CommentList";

function PostCard({ post, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{post.body}</p>

        <button className="btn btn-danger btn-sm mb-2" onClick={onDeleteClick}>
          Delete
        </button>
        <div className="comment-body">
          <CommentList post={post} />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
