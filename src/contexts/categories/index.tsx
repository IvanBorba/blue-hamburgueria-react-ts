import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Category } from "../../types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface CategoriesProviderProps {
  children: ReactNode;
}

interface CategoriesProviderData {
  categories: Category[];
  handleGetCategories: () => void;
}

const CategoriesContext = createContext<CategoriesProviderData>(
  {} as CategoriesProviderData
);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const { logged } = useAuth();

  const [categories, setCategories] = useState<Category[]>([]);

  const handleGetCategories = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/categories", headers).then((res) => {
      console.log(res);
      setCategories(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetCategories();
  }, [logged]);

  return (
    <CategoriesContext.Provider value={{ categories, handleGetCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
