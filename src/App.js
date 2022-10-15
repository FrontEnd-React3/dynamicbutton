import Btn from "./importedtxt"
import './App.css';

function App(btnclass) {
  return (
    <div className="App">

      I am in the App.

      <Btn className={`${btnclass}`} btnclass={"btngreen"} btntxt={"click to send mail"} ></Btn>


    </div >
  );
}

export default App;
