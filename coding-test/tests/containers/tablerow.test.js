import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Tablerow from "../../src/containers/tablerow.js";
import AppReducers from "../../src/reducers/reducers";

afterEach(() => {
  cleanup;
});

const returnReduxSetup = initvalues => {
  let rowdata = {
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    address: {
      city: "Gwenborough"
    },
    company: {
      name: "Romaguera-Crona"
    }
  };
  let store = initvalues
    ? createStore(AppReducers, initvalues)
    : createStore(AppReducers);
  return {
    ...render(
      <Provider store={store}>
        <table>
          <tbody>
            <Tablerow rowdata={rowdata} />
          </tbody>
        </table>
      </Provider>
    ),
    store
  };
};

describe("TableRow Container", () => {
  it("should render without breaking", () => {
    const component = returnReduxSetup();
    expect(component).toBeTruthy();
    expect(document.querySelector("tr")).toBeTruthy();
  });

  it("testing results of tds to make sure results are populating", () => {
    const component = returnReduxSetup();
    expect(document.querySelector(".tablerow-name").innerHTML).toBe(
      "Leanne Graham"
    );
    expect(document.querySelector(".tablerow-email").innerHTML).toBe(
      "Sincere@april.biz"
    );
    expect(document.querySelector(".tablerow-city").innerHTML).toBe(
      "Gwenborough"
    );
    expect(document.querySelector(".tablerow-company").innerHTML).toBe(
      "Romaguera-Crona"
    );
  });

  it("by default the tr should have no className meaning it has not been selected", () => {
    const component = returnReduxSetup();
    expect(document.querySelector("tr").classList.length).toBe(0);
  });

  it("if tr is clicked, tr should have row-clicked class", () => {
    const component = returnReduxSetup();
    fireEvent(
      document.querySelector("tr"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    setTimeout(() => {
      expect(document.querySelector("tr").classList).toBe("row-clicked");
    }, 250);
  });
});
