import "./App.css";
// import { MyCanvas } from "./components/Pts";
import MattCanvas from "./components/Matt";
import { GetStarted } from "./components/GetStarted";
import { GroupTest } from "./components/GroupTest";
import { OpTest } from "./components/OpTest";
import { PtTest } from "./components/PtTest";
import { RotatingPerpendicular } from "./components/RotatingPerpendicular";

function App() {
  console.log("test");
  return (
    <div className="App">
      <p>Hello</p>
      {/* <MyCanvas name="pts-tester" background="#123" play={true} /> */}
      <MattCanvas name="pts-tester" background="#232526" />
      <GetStarted name="pts-tester" background="#abc" />
      <PtTest name="pts-tester" background="#e2e6ef" />
      <GroupTest name="pts-tester" background="#abc" />
      <OpTest name="pts-tester" background="#e2e6ef" />
      <RotatingPerpendicular name="pts-tester" background="#123" />
    </div>
  );
}

export default App;
