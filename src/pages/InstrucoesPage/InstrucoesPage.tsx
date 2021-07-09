import PageContainer from "components/PageContainer/TypingTexts";
import React from "react";
import { NavLink } from "react-router-dom";
import "./InstrucoesPage.less";
// @ts-ignore
import Fade from "react-reveal/Fade";

interface Props {}
const InstrucoesPage: React.FC<Props> = () => {
  return (
    <PageContainer>
      <div className="instrucoes-content">
        <div className="titulo-instrucoes">COMO JOGAR?</div>
        <div className="conteudo-instrucoes">
          <Fade right>
            Essa roda vai fazer você refletir sobre alguns aspectos importantes
            a serem considerados nos comportamentos e atitudes para o
            engajamento do paciente, bem como: identificar as potencialidades,
            recursos e limitações que existem em você para aprimorar ou manter a
            realidade atual.
          </Fade>
          <br />
          <br />
          <Fade left>
            Ao responder você deve selecionar a alternativa que melhor
            representa seu comportamento e/ou atitudes atuais para o engajamento
            do paciente, de acordo com cada situação apresentada.
          </Fade>
        </div>

        <NavLink to="game">
          <div className="btn-go">OK!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default InstrucoesPage;
