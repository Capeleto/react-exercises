import React, { useState } from "react";
import DogeDetails from "./components/dogeDetails/DogeDetails";
import doge from "./components/dogeDetails/doge.jpg";
import CreateBeerForm from "./components/beerForm/CreateBeerForm";
import CreateBeerFormik from "./components/beerFormik/CreateBeerFormik";

import "./App.css";
import "./components/BeerForm.css";
import DogeList from "./components/dogList/DogList";

interface ChildrenInterface {
  children: React.ReactNode;
}

export function Row({ children }: ChildrenInterface) {
  return <div className="inside-container">{children}</div>;
}

interface Values {
  name: string;
  image: string;
}

function App() {
  const [values, setValues] = useState<Values>({ name: "", image: "" });

  function setDogeDetailsValues(name: string, image: string) {
    setValues({ name, image });
  }

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
            <button className="button wide narrow" onClick={() => alert("WOW SUCH DOGO")}>
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
            <DogeDetails id="dogedetails3" name="Dogecoin 2" image={doge} hasScold />
            <CreateBeerForm id="form1" />
            <CreateBeerFormik id="formik1" />
          </Row>
          <Row>
            <span className="wide">EXERCISE 7</span>
            <span className="wide">EXERCISE 8</span>
            <span className="wide">EXERCISE 8 v2</span>
          </Row>
          <Row>
            <CreateBeerFormik id="formik2" emptyValidation />
            <DogeDetails id="dogedetails3" name="Dogecoin 2" image={doge} useMaterial hasScold />
            <CreateBeerFormik id="formik2" emptyValidation useMaterial />
          </Row>
          <Row>
            <span className="wide">EXERCISE 10/11/12/13</span>
          </Row>
          <Row>
            <DogeList id="dogeList" onClick={setDogeDetailsValues} />
          </Row>
          <Row>
            <span className="wide">EXERCISE 14</span>
          </Row>
          <Row>
            <DogeDetails id="dogedetails-list" name={values.name || "doge list"} image={values.image || doge} />
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
