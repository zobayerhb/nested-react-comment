import { useState } from "react";

const Comments = ({ comment = {}, onSubmitComment = () => {} }) => {
  console.log(comment);
  const [replyContent, setReplyConetn] = useState("");
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleReplyChange = (e) => {
    setReplyConetn(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyContent) {
      // logic
      setReplyConetn("");
    }
  };

  return (
    <div className="w-full bg-blue-200 p-4 rounded-md">
      <div className="flex flex-col gap-1">
        <p>{comment.content}</p>
        <p>{comment.votes}</p>
        <p>{new Date(comment.timestamp).toLocaleString()}</p>
      </div>

      {/* buttons */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={handleExpand}
          className="bg-blue-400 py-2 px-8 rounded-md cursor-pointer"
        >
          {expand ? "Hide Comment" : "Reply"}
        </button>
        <button className="bg-blue-400 py-2 px-8 rounded-md cursor-pointer">
          Edit
        </button>
        <button className="bg-blue-400 py-2 px-8 rounded-md cursor-pointer">
          Delete
        </button>
      </div>

      {expand && (
        <div className="w-full flex flex-col">
          <div className="w-full flex">
            <textarea
              value={replyContent}
              onChange={handleReplyChange}
              cols={50}
              rows={3}
              className="border w-full p-4 rounded-2xl"
              placeholder="Add a New Comment..."
            />
            <button
              onClick={handleReplySubmit}
              className="px-10 bg-blue-400 cursor-pointer  rounded-2xl"
            >
              Add Comment
            </button>
          </div>

          {comment?.replies?.map((reply) => {
            return (
              <Comments
                key={reply.id}
                comment={reply}
                onSubmitComment={onSubmitComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
