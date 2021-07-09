import React from "react";
import "./BoasVindasPage.less";
import { NavLink } from "react-router-dom";
import PageContainer from "components/PageContainer/TypingTexts";
import TypingTexts from "components/TypingTexts";
// @ts-ignore
import Fade from "react-reveal/Fade";

interface Props {}
const BoasVindasPage: React.FC<Props> = () => {
  return (
    <PageContainer>
      <div className="boas-vindas-content">
        <Fade right>
          <div className="conteudo-bem-vindo">
            <TypingTexts
              word=" Você já refletiu sobre seus comportamentos e atitudes no engajamento
          do paciente às tecnologias digitais em saúde?"
            />
          </div>
        </Fade>

        <NavLink to="instrucoes">
          <div className="btn-go">COMEÇAR!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default BoasVindasPage;
