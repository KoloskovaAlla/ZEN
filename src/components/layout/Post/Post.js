import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const { id } = params;
  return (
    <h1>{id}</h1>
  );
};

export default Post;
