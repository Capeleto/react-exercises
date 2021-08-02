// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import fetchMock from "jest-fetch-mock";

// fetchMock.enableMocks();

configure({ adapter: new Adapter() });
