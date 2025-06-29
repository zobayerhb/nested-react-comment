import { useState } from "react";
import useCommentTree from "../hooks/use-comment-tree";
import Comments from "./Comments";

const NestedComments = ({
  comments = [],
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const { comment, setComment } = useState("");
  const { comments: commentsData } = useCommentTree(comments);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleReplyComment = () => {
    // something here
  };

  const handleSubmit = () => {
    if (comment) {
      // logic here

      setComment("");
    }
  };
  return (
    <>
      <div className="w-full flex items-center overflow-hidden">
        <textarea
          value={comment}
          onChange={handleChange}
          cols={5}
          rows={5}
          className="p-4 w-full border-2 rounded-2xl"
          placeholder="Write your thoughts"
        />

        <button
          onClick={handleSubmit}
          className="bg-purple-700 text-white font-bold rounded-md py-4 px-10 cursor-pointer"
        >
          Add comment
        </button>
      </div>

      {commentsData?.map((comment) => {
        return (
          <Comments
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReplyComment}
          />
        );
      })}
    </>
  );
};

export default NestedComments;
