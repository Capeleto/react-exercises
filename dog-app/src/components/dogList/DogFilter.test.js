import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import "@testing-library/jest-dom/extend-expect";

import DogFilter from "./DogFilter";

describe("should render component", () => {
  const mockFn = jest.fn();

  describe("without any prop", () =>
    exhaustiveComponentTests(<DogFilter />, true));

  describe("with single props", () => {
    exhaustiveComponentTests(<DogFilter id="id1" />);
    exhaustiveComponentTests(<DogFilter onChange={mockFn} />);
    exhaustiveComponentTests(
      <DogFilter
        data={Object.keys({
          affenpinscher: [],
          african: [],
          airedale: [],
          akita: [],
        })}
      />
    );
  });

  describe("with multiple props", () => {
    it("should render all radio buttons", () => {
      const wrapper = shallow(
        <DogFilter
          data={Object.keys({
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
          })}
        />
      );

      expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it("should execute onChange functions", () => {
      const mockFn = jest.fn().mockResolvedValue();

      const wrapper = shallow(<DogFilter onChange={mockFn} />);

      return wrapper
        .find("#dogeFilter")
        .invoke("onChange")()
        .then(() => {
          expect(mockFn).toBeCalled();
        });
    });

    it("should have multiple(26) radio buttons", () => {
        const wrapper = shallow(<DogFilter onChange={mockFn} />);

        expect(wrapper.find('.radios')).toHaveLength(26);
    })
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
