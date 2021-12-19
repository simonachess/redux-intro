import AddBoy from "./Components/AddBoy";
import AddGirl from "./Components/AddGirl";
import Boys from "./Components/Boys";
import Girls from "./Components/Girls";

function App() {
  return (
    <>
      <div className="App">
        <h1>Boys & Girls</h1>
        <div className="container">
          <div className="item-container">
            <Boys></Boys>
            <AddBoy></AddBoy>
          </div>
          <div className="item-container">
            <Girls></Girls>
            <AddGirl></AddGirl>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
