import { useState } from "react";

const Comments = ({ comment = {}, onSubmitComment = () => {} }) => {
  const [expand, setExpand] = useState(false);
  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = () => {
    if (reply) {
      // logic

      setReply("");
    }
  };

  const handleReplyShow = () => {
    setExpand(!expand);
  };
  return (
    <div className="w-full">
      <p className="text-4xl">{comment.content}</p>
      <p className="text-4xl">{comment.votes}</p>
      <p className="text-4xl">
        {new Date(comment.timestamp).toLocaleTimeString()}
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleReplyShow}
          className="bg-blue-500 rounded-md py-2 px-8 cursor-pointer"
        >
          {expand ? "Hide Reply" : "Reply"}
        </button>
        <button className="bg-blue-500 rounded-md py-2 px-8 cursor-pointer">
          Edit
        </button>
        <button className="bg-blue-500 rounded-md py-2 px-8 cursor-pointer">
          Delete
        </button>

        {expand &
        (
          <div className="w-full flex items-center overflow-hidden">
            <textarea
              value={reply}
              onChange={handleReplyChange}
              cols={5}
              rows={5}
              className="p-4 w-full border-2 rounded-2xl"
              placeholder="Write your thoughts"
            />

            <button
              onClick={handleReplySubmit}
              className="bg-purple-700 text-white font-bold rounded-md py-4 px-10 cursor-pointer"
            >
              Add comment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
