export async function getStaticProps() {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  
    const data = await res.json();
  
    return {
      props: { post: data },
    };
  }
  
  function SSGPage({ post }) {
    return (
      <div>
        <h1>Static Site Generated Post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
  }
  
  export default SSGPage;