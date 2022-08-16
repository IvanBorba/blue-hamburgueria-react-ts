import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import CategoryModal from "../../components/CategoryModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useCategories } from "../../contexts/categories";
import * as Styled from "./styles";

const SettingsCategories = () => {
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="categories" />
      <Styled.EntitiesEditContainer>
        <h2>Gerenciar Categorias</h2>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar Categoria</p>
          </Styled.AddEntityCard>
          {categories.map((element) => {
            return (
              <Styled.EntityCard key={element.id}>
                <p>{element.name}</p>
                <div>
                  <Styled.SettingsCategoryDeleteButton>
                    <TrashIcon /> Remover
                  </Styled.SettingsCategoryDeleteButton>
                  <Styled.SettingsCategoryEditButton>
                    <EditIcon /> Editar
                  </Styled.SettingsCategoryEditButton>
                </div>
              </Styled.EntityCard>
            );
          })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && <CategoryModal handleOpenModal={handleOpenModal} />}
    </Styled.SettingsContainer>
  );
};

export default SettingsCategories;
