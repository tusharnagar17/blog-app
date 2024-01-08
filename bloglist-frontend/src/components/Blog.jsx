import Toggable from "./Toggable";

const Blog = ({ blog }) => {
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

  return (
    <div style={blogStyle}>
      <div>
        <Toggable name="view" content={blog.title}>
          <br />
          <br />
          Title : {blog.title}
          <br />
          Url :{blog.url}
          <br />
          Likes :{blog.likes}
          <br />
          Author :{blog.author}
        </Toggable>
        {/* {blog.title}
         {blog.author} */}
      </div>
      // ...
    </div>
  );
};

export default Blog;
