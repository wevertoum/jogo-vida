import React from "react";
import "./BoasVindasPage.less";
import { NavLink } from "react-router-dom";
import PageContainer from "components/PageContainer/TypingTexts";

interface Props {}
const BoasVindasPage: React.FC<Props> = () => {
  return (
    <PageContainer>
      <div className="boas-vindas-content">
        <div className="titulo-bem-vindo">
          JOGO DA VIDA, RODA AO ENGAJAMENTO
        </div>
        <div className="conteudo-bem-vindo">
          Você já refletiu sobre seus comportamentos e atitudes no engajamento
          do paciente às tecnologias digitais em saúde?
        </div>

        <NavLink to="instrucoes">
          <div className="btn-go-instrucoes">COMEÇAR!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default BoasVindasPage;
