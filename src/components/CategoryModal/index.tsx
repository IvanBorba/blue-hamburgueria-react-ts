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
import { useCategories } from "../../contexts/categories";

interface CategoryModalProps {
  handleOpenModal: () => void;
}

interface NewCategoryData {
  name: string;
}

const newCategorySchema = yup.object().shape({
  name: yup.string().required("Obrigatório informar nome da categoria"),
});

const CategoryModal = ({ handleOpenModal }: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategoryData>({
    resolver: yupResolver(newCategorySchema),
  });

  const handleNewCategory = (data: NewCategoryData) => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post("/categories", data, headers)
      .then(() => {
        toast.success("Categoria criada com sucesso");
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na hora de criar categoria");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer onSubmit={handleSubmit(handleNewCategory)}>
        <h2>Criar nova categoria</h2>
        <StyledInput placeholder="Nome da categoria" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancelar"
            variant="cancel"
            onClick={handleOpenModal}
            size="small"
          />
          <Button text="Enviar" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;
