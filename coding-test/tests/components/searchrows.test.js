import React from "react";
import { render, cleanup } from "@testing-library/react";
import SearchRows from "../../src/components/searchrows.js";

afterEach(cleanup);

describe("SearchRows component", () => {
  const dataObj = {
    title: "Title",
    body: "Body"
  };

  it("SearchRows should render without crashing", () => {
    const component = render(
      <table>
        <tbody>
          <SearchRows data={dataObj} />
        </tbody>
      </table>
    );
    expect(component).toBeTruthy();
  });

  it("SearchRows should have a title of Title and body of Body using dataObj", () => {
    const component = render(
      <table>
        <tbody>
          <SearchRows data={dataObj} />
        </tbody>
      </table>
    );
    expect(document.querySelector("td:first-child").innerHTML).toEqual("Title");
    expect(document.querySelector("td:last-child").innerHTML).toEqual("Body");
  });
});
