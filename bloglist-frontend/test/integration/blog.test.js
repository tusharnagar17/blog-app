import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Blog from "./../../src/components/Blog";
import userEvent from "@testing-library/user-event";

describe("<Blog />", () => {
  let container;
  let likeHandler;
  //   let submitHandler;
  beforeEach(() => {
    likeHandler = jest.fn();
    const data = {
      title: "tushar",
      author: "king",
      url: "url.com",
      likes: "100",
    };
    container = render(<Blog blog={data} likePost={likeHandler} />).container;
  });
  test("blog render correctly", () => {
    const element = screen.getByText("tushar");
    expect(element).toBeDefined();
  });

  test("url and likes when view button clicked", async () => {
    const mockHandler = jest.fn();

    const user = userEvent.setup();
    const viewButton = screen.getByText("view");
    await user.click(viewButton);

    const Url = screen.getByText("url", { exact: false });
    const Likes = screen.getByText("100", { exact: false });

    expect(Url).toBeDefined();
    expect(Likes).toBeDefined();
  });
  test("like button in clicked twice", async () => {
    const mockHandler = jest.fn();

    const user = userEvent.setup();
    const viewButton = screen.getByText("view");
    await user.click(viewButton);

    const likeButton = screen.getByText("like");
    await user.click(likeButton);
    await user.click(likeButton);
    // user click the like button twice
    expect(likeHandler.mock.calls).toHaveLength(2);
  });
});
