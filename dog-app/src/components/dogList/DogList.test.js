import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";

import DogList from "./DogList";

describe("should render component", () => {
  const mockFn = jest.fn();

  describe("without any prop", () =>
    exhaustiveComponentTests(<DogList />, true));

  describe("with single props", () => {
    exhaustiveComponentTests(<DogList id="id1" />);
    exhaustiveComponentTests(<DogList onClick={mockFn} />);
    exhaustiveComponentTests(<DogList useAxios />);
  });

  describe("with multiple props", () => {
    it("should render loading status", () => {
      const wrapper = shallow(<DogList id="id1" onClick={mockFn} />);

      expect(shallowToJson(wrapper)).toMatchInlineSnapshot(`
        <WithStyles(ForwardRef(CircularProgress))
          color="primary"
        />
      `);
    });

    // it("should render the list", () => {
    //   const mockFn = jest.fn(() =>
    //     Promise.resolve({
    //       json: Promise.resolve({
    //         message: {
    //           affenpinscher: [],
    //           african: [],
    //           airedale: [],
    //           akita: [],
    //         },
    //         status: "success",
    //       }),
    //     })
    //   );

    // shallow(<DogList id="id1" onSearch={mockFn} />);

    //   expect(mockFn).toBeCalled();
    // });
  });
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
