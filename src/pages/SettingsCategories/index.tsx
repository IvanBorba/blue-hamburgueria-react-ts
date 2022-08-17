import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import CategoryModal from "../../components/CategoryModal";
import DeleteCategoryModal from "../../components/DeleteCategoryModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useCategories } from "../../contexts/categories";
import { Category } from "../../types";
import * as Styled from "./styles";

const SettingsCategories = () => {
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [category, setCategory] = useState<Category | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (category: Category) => {
    setCategory(category);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
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
                  <Styled.SettingsCategoryDeleteButton
                    onClick={() => {
                      setCategory(element);
                      handleOpenDeleteModal();
                    }}
                  >
                    <TrashIcon /> Remover
                  </Styled.SettingsCategoryDeleteButton>
                  <Styled.SettingsCategoryEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> Editar
                  </Styled.SettingsCategoryEditButton>
                </div>
              </Styled.EntityCard>
            );
          })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <CategoryModal
          setCategory={setCategory}
          category={category}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteCategoryModal
          categoryId={category?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setCategory={setCategory}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsCategories;
