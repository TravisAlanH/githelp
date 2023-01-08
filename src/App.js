import "./App.css";
import Nav from "./Comp/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import RouterPaths from "./Comp/Routes/RouterPaths";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <RouterPaths />
      </div>
    </Router>
  );
}

export default App;
