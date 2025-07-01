import NestedComments from "../../components/NestedComments";
import commentsData from "../../data/comment.json";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <NestedComments
        comments={commentsData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        // onUpvote={() => {}}
        // onDownvote={() => {}}
      />
    </div>
  );
};

export default Home;
