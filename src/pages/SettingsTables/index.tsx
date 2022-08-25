import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import TableModal from "../../components/TableModal";
import DeleteTableModal from "../../components/DeleteTableModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useTables } from "../../contexts/tables";
import { Table } from "../../types";
import * as Styled from "./styles";

const SettingsTables = () => {
  const { tables } = useTables();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [table, setTable] = useState<Table | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (table: Table) => {
    setTable(table);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="tables" />
      <Styled.EntitiesEditContainer>
        <h2>Gerenciar Mesas</h2>
        <Styled.EntitiesEditList>
          <Styled.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar Mesa</p>
          </Styled.AddEntityCard>
          {tables.map((element) => {
            return (
              <Styled.EntityCard key={element.id}>
                <p>{element.number}</p>
                <div>
                  <Styled.SettingsTableDeleteButton
                    onClick={() => {
                      setTable(element);
                      handleOpenDeleteModal();
                    }}
                  >
                    <TrashIcon /> Remover
                  </Styled.SettingsTableDeleteButton>
                  <Styled.SettingsTableEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> Editar
                  </Styled.SettingsTableEditButton>
                </div>
              </Styled.EntityCard>
            );
          })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <TableModal
          setTable={setTable}
          table={table}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteTableModal
          tableId={table?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setTable={setTable}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsTables;
