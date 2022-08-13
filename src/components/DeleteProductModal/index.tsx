import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useProducts } from "../../contexts/products";
import { api } from "../../services";
import { Product } from "../../types";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface DeleteProductModalProps {
  productId?: string;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const DeleteProductModal = ({
  productId,
  handleOpenDeleteModal,
  setProduct,
}: DeleteProductModalProps) => {
  const { handleGetProducts } = useProducts();

  const handleDeleteProduct = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.delete(`/products/${productId}`, headers).then(() => {
      toast.success("Produto excluido com sucesso!");
      handleGetProducts();
      setProduct(undefined);
      handleOpenDeleteModal();
    });
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2>Excluir produto</h2>
        <div>
          <Button
            onClick={() => {
              setProduct(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancelar"
            variant="cancel"
          />
          <Button text="Excluir" onClick={handleDeleteProduct} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteProductModal;
