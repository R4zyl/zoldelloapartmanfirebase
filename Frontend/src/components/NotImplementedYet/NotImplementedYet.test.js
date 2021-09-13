import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { NotImplementedYet } from "./NotImplementedYet";

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

it("element renders text correctly", () => {
  act(() => {
    render(<NotImplementedYet />, container);
  });
  expect(container.textContent).toBe("SorryNot implemented yetGo Home!");
});