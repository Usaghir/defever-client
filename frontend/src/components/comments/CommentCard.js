import React, {useState} from "react";
import UserApi from "../../api/UserApi";

function CommentCard({ comment, onDeleteClick }) {
  const [user, setUser] = useState(UserApi.currentUser);
  UserApi.bindCurrentUserStateSetter(setUser);
  return (
    <div className="card mt-3">
      <div className="card-body">
      <div>{user.name}</div>
        <p>{comment.body}</p>
        <button className="btn btn-danger ml-5" onClick={onDeleteClick}>
          Delete Comment
        </button>
      </div>
    </div>
  );
}

export default CommentCard;
