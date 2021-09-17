import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { HeaderButton } from "../HeaderButton";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("button renders text correctly", () => {
  act(() => {
    render(<HeaderButton innerText="Example inner text"/>, container);
  });
  expect(container.textContent).toBe("Example inner text");
});
