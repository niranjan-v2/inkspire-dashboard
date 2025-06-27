import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Signed in as: </p>
          <img className="h-5 w-5 object-cover rounded-full" src={currentUser.profilePicture} alt="" />
          <Link className="text-xs text-indigo-950 dark:text-indigo-300 hover:underline" to={"/dashboard?tab=profile"}>@{currentUser.username}</Link>
        </div>
      ) : (
        <div className="">
            You must me signed in to comment. 
            <Link to={"/signin"}>Sign in</Link>
        </div>
      )}
    </div>
  );
}
