import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useTables } from "../../contexts/tables";
import { Table } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface TableModalProps {
  handleOpenModal: () => void;
  table?: Table;
  setTable: Dispatch<SetStateAction<Table | undefined>>;
}

interface TableData {
  number: number;
}

const tableSchema = yup.object().shape({
  number: yup.number().required("Obrigatório informar numero da mesa"),
});

const TableModal = ({ handleOpenModal, table, setTable }: TableModalProps) => {
  const { handleGetTables } = useTables();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TableData>({
    resolver: yupResolver(tableSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewTable = (data: TableData) => {
    api
      .post("/tables", data, headers)
      .then(() => {
        toast.success("Mesa criada com sucesso");
        handleGetTables();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de criar mesa");
      });
  };

  const handleUpdateTable = (data: TableData) => {
    api
      .patch(`/tables/${table?.id}`, data, headers)
      .then(() => {
        toast.success("Mesa editada com sucesso");
        handleGetTables();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de editar mesa");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(table ? handleUpdateTable : handleNewTable)}
      >
        <h2>{table ? "Editar mesa" : "Criar nova mesa"}</h2>
        <StyledInput
          placeholder="Número da mesa"
          {...register("number")}
          defaultValue={table ? table.number : ""}
          type="number"
          min="1"
        />
        <ErrorMessage>{errors.number?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancelar"
            variant="cancel"
            onClick={() => {
              setTable(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="Enviar" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default TableModal;
