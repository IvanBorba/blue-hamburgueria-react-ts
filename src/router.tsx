import { Dispatch, SetStateAction, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

interface RouterProps {
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Router = ({ logged, setLogged }: RouterProps) => {
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home setLogged={setLogged} />} />
          <Route
            path="/settings"
            element={<Settings setLogged={setLogged} />}
          />
        </>
      ) : (
        <Route path="/login" element={<Login setLogged={setLogged} />} />
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default Router;
