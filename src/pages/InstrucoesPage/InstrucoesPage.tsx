import PageContainer from "components/PageContainer/TypingTexts";
import React from "react";
import { NavLink } from "react-router-dom";
import "./InstrucoesPage.less";

interface Props {}
const InstrucoesPage: React.FC<Props> = () => {
  return (
    <PageContainer>
      <div className="instrucoes-content">
        <div className="titulo-instrucoes">COMO JOGAR?</div>
        <div className="conteudo-instrucoes">
          Essa roda vai fazer você refletir sobre alguns aspectos importantes a
          serem considerados nos comportamentos e atitudes para o engajamento do
          paciente, bem como: identificar as potencialidades, recursos e
          limitações que existem em você para aprimorar ou manter a realidade
          atual.
          <br />
          <br />
          Ao responder você deve selecionar a alternativa que melhor representa
          seu comportamento e/ou atitudes atuais para o engajamento do paciente,
          de acordo com cada situação apresentada.
        </div>

        <NavLink to="game">
          <div className="btn-go-instrucoes">OK!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default InstrucoesPage;
