import React from "react";
import DogeDetails from "./components/dogeDetails/DogeDetails";
import doge from "./components/dogeDetails/doge.jpg";
import CreateBeerForm from "./components/beerForm/CreateBeerForm";
import CreateBeerFormik from "./components/beerFormik/CreateBeerFormik";

import "./App.css";
import "./components/BeerForm.css";

interface ChildrenInterface {
  children: React.ReactNode;
}

export function Row({ children }: ChildrenInterface) {
  return <div className="inside-container">{children}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="exercises-container">
          <Row>
            <span className="wide">EXERCISE 1</span>
            <span className="wide">EXERCISE 2</span>
            <span className="wide">EXERCISE 3</span>
          </Row>
          <Row>
            <button
              className="button wide narrow"
              onClick={() => alert("WOW SUCH DOGO")}
            >
              Doge Alert
            </button>
            <DogeDetails id="dogedetails1" name="Dogecoin" image={doge} />
            <DogeDetails
              id="dogedetails2"
              name="Dogecoin 2"
              image={doge}
              onBark={() => alert("Woof! Woof!")}
            />
          </Row>
          <Row>
            <span className="wide">EXERCISE 4</span>
            <span className="wide">EXERCISE 5</span>
            <span className="wide">EXERCISE 6</span>
          </Row>
          <Row>
            <DogeDetails
              id="dogedetails3"
              name="Dogecoin 2"
              image={doge}
              hasScold
            />
            <CreateBeerForm id="form1" />
            <CreateBeerFormik id="formik1" />
          </Row>
          <Row>
            <span className="wide">EXERCISE 7</span>
          </Row>
          <Row>
            <CreateBeerFormik id="formik2" emptyValidation />
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
