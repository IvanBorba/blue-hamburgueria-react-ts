import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useTables } from "../../contexts/tables";
import { api } from "../../services";
import { Table } from "../../types";
import { DeleteModalContainer } from "./styles";
import Button from "../Button";

interface DeleteTableModalProps {
  tableId?: string;
  handleOpenDeleteModal: () => void;
  setTable: Dispatch<SetStateAction<Table | undefined>>;
}

const DeleteTableModal = ({
  tableId,
  handleOpenDeleteModal,
  setTable,
}: DeleteTableModalProps) => {
  const { handleGetTables } = useTables();

  const handleDeleteTable = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/tables/${tableId}`, headers).then(() => {
      toast.success("Mesa excluida com sucesso!");
      handleGetTables();
      setTable(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Excluir mesa</h2>
        <div>
          <Button
            onClick={() => {
              setTable(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Excluir" onClick={handleDeleteTable} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteTableModal;
