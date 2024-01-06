const Blog = ({ blog }) => {
  // console.log(blog.title);
  return (
    <div>
      {blog.title} <br />
      Author:c<b>{blog.author}</b>
    </div>
  );
};

export default Blog;
