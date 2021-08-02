import { shallow } from "enzyme";
import { useStore } from "effector-react";

import App, { store, setValues } from "../App";

jest.mock("effector-react");

const DEFAULT_STATE = {
  name: "name",
  image: "image",
};

jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
    },
    status: "success",
  }),
});

// des cribe("store", () => {
//   it("should update the state correctly", () => {
//     useStore.mockImplementation(() => DEFAULT_STATE);

//     const wrapper = shallow(<App />);

//     wrapper.find("#A").getElement().simulate("click");
//     console.log(wrapper.getState())

//     // expect(values).toBeNull();
//   });
// });
