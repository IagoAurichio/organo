import { FaTrash } from "react-icons/fa";
import "./BotaoDeletar.css";

const BotaoDeletar = ({ nome, aoColaboradorRemovido }) => {
  
  const handleClick = () => {
    aoColaboradorRemovido(nome);
  }

  return (
    <div className="botao-deletar">
      <button
        onClick={handleClick}
      >
        <FaTrash size={20} />
      </button>
    </div>
  );
};

export default BotaoDeletar;
