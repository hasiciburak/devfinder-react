import "./App.scss";
import Details from "./components/layout/details";
import Navbar from "./components/layout/navbar";
import Search from "./components/layout/search";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { data, isLoading, error, refetch } = useQuery({
    enabled: false,
    queryKey: ["users"],
    queryFn: async () =>
      await axios.get(`https://api.github.com/users/${userName}`),
  });

  useEffect(() => {
    console.log("OUR DATA", { result: data, isLoading, error });
  }, []);

  return (
    <div className="app">
      <div className="wrapper">
        <Navbar />
        <Search
          userName={userName}
          setUserName={setUserName}
          loaded={loaded}
          setLoaded={setLoaded}
          error={error}
          isLoading={isLoading}
          refetch={refetch}
        />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data && <Details data={data.data} />
        )}
      </div>
    </div>
  );
}

export default App;
