import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { mockedCategories } from "../../mocks";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/products";

interface ProductModalProsp {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId?: string;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("Nome do produto obrigatório"),

  description: yup.string().required("Descrição do produto obrigatória"),

  price: yup.number().required("Preço do produto obrigatório"),

  image: yup
    .string()
    .url("Formato de URL inválido")
    .required("Image do produto obrigatória"),
});

const ProductModal = ({ handleOpenModal }: ProductModalProsp) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post("/products", data, headers)
      .then(() => {
        toast.success("Produto registrado com sucesso");
        handleGetProducts();
        handleOpenModal();
      })
      .catch(() => toast.error("Selecione uma categoria"));
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewProduct)}>
        <h2>Adicionar Produto</h2>
        <StyledInput placeholder="Nome do Produto" {...register("name")} />
        <StyledInput
          placeholder="Descrição do Produto"
          {...register("description")}
        />
        <StyledInput
          type="number"
          step="0.01"
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          placeholder="URL da Imagem do Produto"
          {...register("image")}
        />
        <Styled.Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Selecione a categoria</option>
          {mockedCategories.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </Styled.Select>
        {
          <ErrorMessage>
            {errors.name?.message ||
              errors.description?.message ||
              errors.price?.message ||
              errors.image?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={handleOpenModal}
            size="small"
            text="Cancelar"
            variant="cancel"
          />
          <Button size="small" text="Enviar" type="submit" />
        </div>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  );
};

export default ProductModal;
