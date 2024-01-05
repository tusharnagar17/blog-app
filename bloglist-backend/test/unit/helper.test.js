const helper = require("./../../utils/helper");

describe("helper.js test", () => {
  test("return 1", () => {
    expect(helper.dummy()).toBe(1);
  });

  test("total no. of likes on all blogs", () => {
    const newBlog = [{ likes: 5 }];
    const result = helper.totalLikes(newBlog);
    expect(result).toBe(5);
  });

  test("Most liked blog", () => {
    const allBlog = [
      { name: "tushar", class: "4", likes: 100 },
      { name: "harsh", class: "5", likes: 200 },
    ];
    const result = helper.mostLikes(allBlog);
    console.log(result);
    expect(result).toEqual([{ name: "harsh", class: "5", likes: 200 }]);
  });
});
