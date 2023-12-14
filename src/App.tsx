import "./App.scss";
import Navbar from "./components/layout/navbar";

import Search from "./components/layout/search";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Navbar />
        <Search />
      </div>
    </div>
  );
}

export default App;
