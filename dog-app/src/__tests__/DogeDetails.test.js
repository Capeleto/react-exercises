import React from "react";
import ReactDOM from "react-dom";
import { queryByAttribute, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DogeDetails from "../components/dogeDetails/DogeDetails";
import doge from "../components/dogeDetails/doge.jpg";

describe("should render component", () => {
  const mockFn = jest.fn();

  describe("without any prop", () =>
    exhaustiveComponentTests(<DogeDetails />, true));

  describe("with single props", () => {
    exhaustiveComponentTests(<DogeDetails hasScold />);
    exhaustiveComponentTests(<DogeDetails image={doge} />);
    exhaustiveComponentTests(<DogeDetails onBark={mockFn} />);
    exhaustiveComponentTests(<DogeDetails name="doge name" />);
  });

  describe("with multiple props", () => {
    const { container, getByText } = render(
      <DogeDetails
        id="doge"
        name="doge name"
        image={doge}
        onBark={mockFn}
        hasScold
      />
    );

    const getById = queryByAttribute.bind(null, "id");

    getById(container, "doge-bark").click();

    expect(mockFn.mock.calls.length).toEqual(1);
    expect(getByText("doge name")).toBeInTheDocument();
    expect(getByText("Scold!")).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="exercises-container wide"
          id="doge"
        >
          <img
            alt="logo"
            class="doge-image"
            src="doge.jpg"
          />
          <span
            class="small"
          >
            doge name
          </span>
          <button
            class="button small"
            id="doge-bark"
          >
            Bark
          </button>
          <button
            class="button small"
            id="doge-scold"
          >
            Scold!
          </button>
          <span>
            0
          </span>
        </div>
      </div>
    `);
  });

  //   const { container, getByText } = render(<Row>{DEFAUL_TEXT}</Row>);
  //   expect(getByText(DEFAUL_TEXT)).toBeInTheDocument();
  //   expect(container.innerHTML).toMatchInlineSnapshot(
  //     `"<div class=\\"inside-container\\">DEFAUL TEXT FOR TESTING</div>"`
  //   );
});

function exhaustiveComponentTests(component, withJunk = false) {
  it("should render the component without breaking it", () => {
    ReactDOM.render(component, document.createElement("div"));
  });

  if (withJunk) {
    it("should render the component without breaking it when junk is passed to props", () => {
      ReactDOM.render(
        React.cloneElement(component, { junk1: 12, test: "asd", junk: true }),
        document.createElement("div")
      );
    });
  }
}
