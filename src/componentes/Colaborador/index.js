import BotaoDeletar from "../BotaoDeletar";
import "./Colaborador.css";

const Colaborador = ({
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoColaboradorRemovido,
}) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <BotaoDeletar
          nome={nome}
          aoColaboradorRemovido={aoColaboradorRemovido}
        />
      </div>
    </div>
  );
};

export default Colaborador;
