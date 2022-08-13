import Menu from "../../components/Menu";
import * as Styled from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";
import { Product } from "../../types";

const Settings = () => {
  const { products } = useProducts();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
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
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar Item</p>
          </Styled.AddEntityCard>
          {products.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </Styled.EntitiesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel" />
          <Button text="Salvar mudanças" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <ProductModal product={product} handleOpenModal={handleOpenModal} />
      )}
    </Styled.SettingsContainer>
  );
};

export default Settings;
