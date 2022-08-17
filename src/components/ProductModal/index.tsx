import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import * as Styled from "./styles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Dispatch, SetStateAction, useState } from "react";
import { mockedCategories } from "../../mocks";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/products";
import { Product } from "../../types";

interface ProductModalProsp {
  handleOpenModal: () => void;
  product?: Product;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

interface NewProductData {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
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

const updateProductSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  price: yup.number(),

  image: yup.string().url("Formato de URL inválido"),
});

const ProductModal = ({
  handleOpenModal,
  product,
  setProduct,
}: ProductModalProsp) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>(
    product ? product.categoryId : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api
      .post("/products", data, headers)
      .then(() => {
        toast.success("Produto registrado com sucesso");
        handleGetProducts();
        handleOpenModal();
        setProduct(undefined);
      })
      .catch(() => toast.error("Selecione uma categoria"));
  };

  const handleUpdateProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      toast.success("Produto atualizado com sucesso");
      handleGetProducts();
      handleOpenModal();
      setProduct(undefined);
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Editar Produto" : "Adicionar Produto"}</h2>
        <StyledInput
          defaultValue={product ? product.name : ""}
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <StyledInput
          defaultValue={product ? product.description : ""}
          placeholder="Descrição do Produto"
          {...register("description")}
        />
        <StyledInput
          defaultValue={product ? product.price : ""}
          type="number"
          step="0.01"
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          defaultValue={product ? product.image : ""}
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
        <ErrorMessage>
          {errors.name?.message ||
            errors.description?.message ||
            errors.price?.message ||
            errors.image?.message}
        </ErrorMessage>
        <div>
          <Button
            onClick={() => {
              setProduct(undefined);
              handleOpenModal();
            }}
            size="small"
            text="Cancelar"
            variant="cancel"
          />
          <Button size="small" text="Enviar" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default ProductModal;
