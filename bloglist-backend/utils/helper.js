const dummy = (data) => {
  return 1;
};

const totalLikes = (data) => {
  return data.reduce((sum, item) => {
    console.log("sum: ", sum, "item", item.likes);
    return sum + item.likes;
  }, 0);
};

const mostLikes = (data) => {
  if (data.length === 0) {
    return null;
  }
  const maxLiked = data.reduce((max, cur) => {
    console.log(
      "max.name",
      max.name,
      max.likes,
      "cur.name cur.likes",
      cur.name,
      cur.likes
    );
    return max.likes > cur.likes ? max.likes : cur.likes;
  }, data[0]);
  const maxObj = data.filter((note) => {
    return note.likes === maxLiked;
  });
  // console.log("maxObj: ", maxObj);
  return maxObj;
};

module.exports = { dummy, totalLikes, mostLikes };
