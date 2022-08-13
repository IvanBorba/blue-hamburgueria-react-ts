import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import * as Styled from "./styles";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface ProductModalProsp {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  price: number;
  image: string;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {
    console.log(data);
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
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          placeholder="URL da Imagem do Produto"
          {...register("image")}
        />
        <StyledInput placeholder="Categoria do produto" />
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
