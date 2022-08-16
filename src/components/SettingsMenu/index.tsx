import { useNavigate } from "react-router-dom";
import { InfoIcon, MarketIcon, PromotionIcon } from "../../assets/icons";
import * as Styled from "./styles";

interface SettingsMenuProps {
  path: "users" | "tables" | "categories" | "products";
}

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate();
  return (
    <Styled.SettingsNavigationContainer>
      <h2>Configurações</h2>
      <Styled.SettingsNavigationButtonsList>
        <Styled.SettingsNavigationButtonContainer
          active={path === "tables"}
          onClick={() => navigate("/settings/tables")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "tables"}>
            <MarketIcon />
            <h2>Customize suas mesas</h2>
            <p>Adicione mesas, configure nomes</p>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "products"}
          onClick={() => navigate("/settings/products")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "products"}>
            <PromotionIcon />
            <h2>Gerenciar Produtos</h2>
            <p>Edite os pratos, preços e etc.</p>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "categories"}
          onClick={() => navigate("/settings/categories")}
        >
          <Styled.SettingsNavigationButtonSelected
            active={path === "categories"}
          >
            <PromotionIcon />
            <h2>Gerenciar Categorias</h2>
            <p>Adicione e edite categorias</p>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
        <Styled.SettingsNavigationButtonContainer
          active={path === "users"}
          onClick={() => navigate("/settings/users")}
        >
          <Styled.SettingsNavigationButtonSelected active={path === "users"}>
            <InfoIcon />
            <h2>Gerenciar usuários</h2>
            <p>Gerencie o acesso ao sistema</p>
          </Styled.SettingsNavigationButtonSelected>
        </Styled.SettingsNavigationButtonContainer>
      </Styled.SettingsNavigationButtonsList>
    </Styled.SettingsNavigationContainer>
  );
};

export default SettingsMenu;
