import "./App.css";
import Mainpage from "./components/Mainpage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
