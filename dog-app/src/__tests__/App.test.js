import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App, { Row } from "../App";

const DEFAUL_TEXT = "DEFAUL TEXT FOR TESTING";

it("should render the children inside the row", () => {
  const { container, getByText } = render(<Row>{DEFAUL_TEXT}</Row>);
  expect(getByText(DEFAUL_TEXT)).toBeInTheDocument();
  expect(container.innerHTML).toMatchInlineSnapshot(
    `"<div class=\\"inside-container\\">DEFAUL TEXT FOR TESTING</div>"`
  );
});

it("should render the app", () => {
  ReactDOM.render(<App />, document.createElement("div"));
});
