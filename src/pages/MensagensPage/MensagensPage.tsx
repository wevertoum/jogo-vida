import PageContainer from "components/PageContainer/TypingTexts";
import useMountEffect from "hooks/lifecycle/useMountEffect";
import useRerenderWrapper from "hooks/useRerenderWrapper";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MensagensPage.less";

interface Props {}
const MensagensPage: React.FC<Props> = () => {
  const [fraseAtual, setFraseAtual] = useState("");
  const [RerenderWrapper, rerender] = useRerenderWrapper();

  const arrayDeFrases = [
    "au meu deus como eu amo bolo",
    "aoo goiás",
    "tres pratos de trigo para tres tigres tristes",
    "teste de frase aleatoria separada por espacos",
  ];

  const _generateFrases = () => {
    arrayDeFrases.forEach((word, i) =>
      setInterval(() => {
        setFraseAtual(word);
        rerender();
      }, (i + 1) * 4000)
    );
  };

  useMountEffect(_generateFrases);

  return (
    <PageContainer>
      <div className="mensagens-content">
        <div className="titulo-mensagens">Mensagens!</div>
        <div className="conteudo-mensagens">
          <RerenderWrapper>
            <div className="text-animation">{fraseAtual}</div>
          </RerenderWrapper>
        </div>

        <NavLink to="/">
          <div className="btn-go-mensagens">HOME</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default MensagensPage;
