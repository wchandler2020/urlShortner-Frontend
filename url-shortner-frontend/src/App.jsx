import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { getApps } from "./utils/helper";

function App() {
  const CurrentApp = getApps();
  return (
    <div className="bg-white h-100">
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
