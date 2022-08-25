import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Table } from "../../types";
import { api } from "../../services";
import { useAuth } from "../auth";

interface TablesProviderProps {
  children: ReactNode;
}

interface TablesProviderData {
  tables: Table[];
  handleGetTables: () => void;
}

const TablesContext = createContext<TablesProviderData>(
  {} as TablesProviderData
);

export const TablesProvider = ({ children }: TablesProviderProps) => {
  const { logged } = useAuth();

  const [tables, setTables] = useState<Table[]>([]);

  const handleGetTables = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get("/tables", headers).then((res) => {
      console.log(res);
      setTables(res.data);
    });
  };

  useEffect(() => {
    if (logged) handleGetTables();
  }, [logged]);

  return (
    <TablesContext.Provider value={{ tables, handleGetTables }}>
      {children}
    </TablesContext.Provider>
  );
};

export const useTables = () => useContext(TablesContext);
