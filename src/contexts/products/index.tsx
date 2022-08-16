import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Product } from "../../types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: Product[];
  handleGetProducts: () => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const { logged } = useAuth();

  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/products", headers).then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetProducts();
  }, [logged]);

  return (
    <ProductsContext.Provider value={{ products, handleGetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
