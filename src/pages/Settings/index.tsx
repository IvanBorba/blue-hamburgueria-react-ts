import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import { mockedProducts } from "../../mocks";
import SettingsProductCard from "../../components/SettingsProductCard";

interface SettingsProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Settings = ({ setLogged }: SettingsProps) => {
  return (
    <Styled.SettingsContainer>
      <Menu path="settings" setLogged={setLogged} />
      <Styled.SettingsNavigationContainer>
        <h2>Configurações</h2>
        <Styled.SettingsNavigationButtonsList>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <MarketIcon />
              <h2>Customize suas mesas</h2>
              <p>Adicione mesas, configure nomes</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer active>
            <Styled.SettingsNavigationButtonSelected active>
              <PromotionIcon />
              <h2>Gerenciar Produtos</h2>
              <p>Edite os pratos, preços e etc.</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <PromotionIcon />
              <h2>Gerenciar Categorias</h2>
              <p>Adicione e edite categorias</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
          <Styled.SettingsNavigationButtonContainer>
            <Styled.SettingsNavigationButtonSelected>
              <InfoIcon />
              <h2>Gerenciar usuários</h2>
              <p>Gerencie o acesso ao sistema</p>
            </Styled.SettingsNavigationButtonSelected>
          </Styled.SettingsNavigationButtonContainer>
        </Styled.SettingsNavigationButtonsList>
      </Styled.SettingsNavigationContainer>
      <Styled.EntitiesEditContainer>
        <h2>Gerenciar Produtos</h2>
        <Styled.EntitiesEditCategoriesSelector className="entities-edit-categories-selector">
          <Styled.EntitiesEditCategoriesButton active>
            Lanches
          </Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton>
            Porções
          </Styled.EntitiesEditCategoriesButton>
          <Styled.EntitiesEditCategoriesButton>
            Bebidas
          </Styled.EntitiesEditCategoriesButton>
        </Styled.EntitiesEditCategoriesSelector>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard>
            <h3>+</h3>
            <p>Adicionar Item</p>
          </Styled.AddEntityCard>
          {mockedProducts.map((element) => (
            <SettingsProductCard product={element} key={element.id} />
          ))}
        </Styled.EntitiesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel" />
          <Button text="Salvar mudanças" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;
