import { useState } from "react";

const useCommentTree = (initialComments) => {
  const [comments, setComments] = useState(initialComments);

  return {
    comments,
  };
};

export default useCommentTree;
