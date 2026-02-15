import React from "react";
import { createRoot } from "react-dom/client";
import { afterEach, expect, test, vi } from "vitest";

import App from "./App";
import { mockFetch } from "./testing/mockFetch";

// The HTML element the React app is rendered into
let root;

afterEach(() => {
  if (root) {
    root.unmount();
  }

  vi.restoreAllMocks();
});

const render = (jsx) => {
  const div = document.createElement("div");
  root = createRoot(div);
  root.render(jsx);
  return root;
};

test("renders without crashing", async () => {
  const fetchFn = mockFetch({
    data: { oddballs: [] },
  });

  global.fetch = fetchFn;

  render(<App />);

  await vi.waitFor(() => {
    expect(fetchFn).toHaveBeenCalledTimes(1);
  });
});
