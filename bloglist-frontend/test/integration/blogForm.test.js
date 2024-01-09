import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import BlogForm from "./../../src/components/BlogForm";
import userEvent from "@testing-library/user-event";

describe("<BlogForm />", () => {
  test("verify props data", async () => {
    const submitHandler = jest.fn();
    render(<BlogForm handleBlogSubmit={submitHandler} />);

    const user = userEvent.setup();
    const inputs = screen.getAllByRole("textbox");
    const submitButton = screen.getByText("Submit");

    await user.type(inputs[0], "tushar");
    await user.type(inputs[1], "king");
    await user.type(inputs[2], "url.com");
    await user.type(inputs[3], "100");

    // submit click
    await user.click(submitButton);

    // console.log(submitHandler.mock.calls[0][0]);
    expect(submitHandler.mock.calls[0][0]).toEqual({
      title: "tushar",
      author: "king",
      url: "url.com",
      likes: "100",
    });
  });
});
