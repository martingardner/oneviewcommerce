import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchRows from "../../src/components/searchrows.js";

afterEach(cleanup);

describe("SearchRows component", () => {
  it("SearchRows should render without crashing", () => {
    const dataObj = {
      data: {
        title: "Title",
        body: "Body"
      }
    };
    const component = render(
      <table>
        <tbody>
          <SearchRows data={dataObj} />
        </tbody>
      </table>
    );
    expect(component).toBeTruthy();
  });
});
