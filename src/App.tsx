import "./App.scss";
import Details from "./components/layout/details";
import Navbar from "./components/layout/navbar";

import Search from "./components/layout/search";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Navbar />
        <Search />
        <Details />
      </div>
    </div>
  );
}

export default App;
