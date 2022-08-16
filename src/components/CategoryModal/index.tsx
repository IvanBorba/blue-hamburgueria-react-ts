import { ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";

interface CategoryModalProps {
  handleOpenModal: () => void;
}

const CategoryModal = ({ handleOpenModal }: CategoryModalProps) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>Criar nova categoria</h2>
        <StyledInput placeholder="Nome da categoria" />
        <div>
          <Button text="Cancelar" variant="cancel" onClick={handleOpenModal} />
          <Button text="Enviar" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;
