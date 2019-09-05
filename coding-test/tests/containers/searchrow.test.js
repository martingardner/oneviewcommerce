import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SearchRow } from "../../src/containers/searchrow.js";

afterEach(cleanup);

describe("SearchRow container", () => {
  it("should render wtihout breaking", () => {
    const component = render(<SearchRow />);
    expect(component).toBeTruthy();
  });
});
