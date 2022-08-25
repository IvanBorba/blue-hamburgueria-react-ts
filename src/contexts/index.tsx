import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { ProductsProvider } from "./products";
import { CategoriesProvider } from "./categories";
import theme from "../assets/styles/theme";
import { TablesProvider } from "./tables";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CategoriesProvider>
            <ProductsProvider>
              <TablesProvider>{children}</TablesProvider>
            </ProductsProvider>
          </CategoriesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
