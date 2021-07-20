import React from "react";
import "./App.css";
import DogeDetails from "./components/dogeDetails/DogeDetails";
import doge from "./components/dogeDetails/doge.jpg";
import CreateBeerForm from "./components/beerForm/CreateBeerForm";

interface ChildrenInterface {
  children: React.ReactNode;
}

function Row({ children }: ChildrenInterface) {
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
            <DogeDetails name="Dogecoin" image={doge} />
            <DogeDetails
              name="Dogecoin 2"
              image={doge}
              onBark={() => alert("Woof! Woof!")}
            />
          </Row>
          <Row>
            <span className="wide">EXERCISE 4</span>
            <span className="wide">EXERCISE 5</span>
          </Row>
          <Row>
            <DogeDetails name="Dogecoin 2" image={doge} hasScold />
            <CreateBeerForm id="form1" />
          </Row>
        </div>
      </header>
    </div>
  );
}

export default App;
