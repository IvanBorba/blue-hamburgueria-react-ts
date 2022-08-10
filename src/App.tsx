import { Toaster } from "react-hot-toast";
import Router from "./router";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router logged={logged} setLogged={setLogged} />
    </div>
  );
};

export default App;
