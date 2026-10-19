const data = await res.json();

  return {
    props: {
      post: data,
    },
  };

function DynamicSSRPage({ post }) {
  return (
    <div>
      <h1>Dynamic Server-Side Rendered Post</h1>
      <h2>Post ID: {post.id}</h2>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default DynamicSSRPage;