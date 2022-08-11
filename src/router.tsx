import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default Router;
