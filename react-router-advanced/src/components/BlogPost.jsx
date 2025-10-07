// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Blog Post #{id}</h2>
      <p>This is the content of blog post with ID: {id}</p>
    </div>
  );
}

export default BlogPost;
