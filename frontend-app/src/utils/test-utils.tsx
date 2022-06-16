/* eslint-disable import/export */
import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <Router>{children}</Router>,
    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };
