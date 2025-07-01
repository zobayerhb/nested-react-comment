import { useState } from "react";
import useCommentTree from "../hooks/use-comment-tree";
import Comments from "./Comments";

const NestedComments = ({
  comments = [],
  onSubmit = () => {},
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const [comment, setComment] = useState("");
  const { comments: commentsData } = useCommentTree(comments);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleReply = () => {
    //
  };

  const handleSubmit = () => {
    if (comment) {
      // logic

      setComment("");
    }
  };
  console.log(comment);

  return (
    <div className="w-full flex flex-col gap-10 px-6">
      <h1 className="text-4xl text-blue-600 font-bold">Nested Component</h1>

      <div className="w-full flex">
        <textarea
          value={comment}
          onChange={handleChange}
          cols={50}
          rows={3}
          className="border w-full p-4 rounded-2xl"
          placeholder="Add a New Comment..."
        />
        <button
          onClick={handleSubmit}
          className="px-10 bg-blue-400 cursor-pointer  rounded-2xl"
        >
          Add Comment
        </button>
      </div>

      {/* comments data */}
      {commentsData?.map((comment) => {
        return (
          <Comments
            key={comment.id}
            comment={comment}
            onSubmitComment={handleReply}
          />
        );
      })}
    </div>
  );
};

export default NestedComments;
