import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">

      <div className="icones">
        <a href="https://www.facebook.com" target="_blank"><img src="./imagens/fb.png" alt="Ícone do facebook"></img></a>
        <a href="https://www.twitter.com" target="_blank"><img src="./imagens/tw.png" alt="Ícone do twitter"></img></a>
        <a href="https://www.instagram.com" target="_blank"><img src="./imagens/ig.png" alt="Ícone do instagram"></img></a>
      </div>

      <div className="logo">
        <img src="./imagens/logo.png" alt="logo"></img>
      </div>
        
      <p>Desenvolvido por Alura.</p>
      
    </footer>
  );
};

export default Rodape;
