import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Routes>
      <Route path="/" element={<Home setLogged={setLogged} />} />
      <Route path="/settings" element={<Settings setLogged={setLogged} />} />
      <Route path="/login" element={<Login setLogged={setLogged} />} />
    </Routes>
  );
};

export default Router;
