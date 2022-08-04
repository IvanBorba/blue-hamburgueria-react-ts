import { Toaster } from "react-hot-toast";
import Router from "./router";
import "./App.css";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Router />
    </div>
  );
};

export default App;
