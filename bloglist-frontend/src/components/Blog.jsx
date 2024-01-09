import Toggable from "./Toggable";

const Blog = ({ blog, likePost, delPost }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  // DUmmy content
  // const blog = {
  //   title: "tushar",
  //   author: "tushar Nagar",
  //   url: "tushar.com",
  //   likes: "12313131",
  // };
  const LikeButton = () => {
    const handleClick = () => {
      console.log("handle clicked");
      likePost(blog.id);
    };
    return <button onClick={handleClick}>like</button>;
  };
  const DeleteButton = () => {
    const handleClick = () => {
      delPost(blog.id);
    };
    return (
      <button style={{ backgroundColor: "tomato" }} onClick={handleClick}>
        {" "}
        Delete{" "}
      </button>
    );
  };

  return (
    <div style={blogStyle} className="blog">
      <div>
        <Toggable name="view" content={blog.title}>
          <br />
          <br />
          Title : {blog.title}
          <br />
          Url :{blog.url}
          <br />
          Likes :{blog.likes} <LikeButton />
          <br />
          Author :{blog.author}
          <br />
          <DeleteButton />
        </Toggable>
        {/* {blog.title}
         {blog.author} */}
      </div>
      // ...
    </div>
  );
};

export default Blog;
