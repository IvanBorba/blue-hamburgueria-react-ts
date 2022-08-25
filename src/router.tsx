import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SettingsCategories from "./pages/SettingsCategories";
import SettingsProducts from "./pages/SettingsProducts";
import SettingsTables from "./pages/SettingsTables";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/products" element={<SettingsProducts />} />
          <Route path="/settings/categories" element={<SettingsCategories />} />
          <Route path="/settings/tables" element={<SettingsTables />} />
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
