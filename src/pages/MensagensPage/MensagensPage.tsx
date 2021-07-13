import PageContainer from "components/PageContainer/TypingTexts";
import useMountEffect from "hooks/lifecycle/useMountEffect";
import useRerenderWrapper from "hooks/useRerenderWrapper";
import React, { useMemo, useState } from "react";
import { Howl } from "howler";
import { NavLink } from "react-router-dom";
import "./MensagensPage.less";
import { Button } from "antd";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";

const arrayDeFrases = [
  "Como você se sentiu depois dessa construção (a roda)?",
  "O que te chamou mais atenção nessa vivência?",
  "Quais crenças internas podem estar dificultando o andamento da sua roda?",
  "Existem atitudes que você gostaria de aprimorar ou mudar?",
  "O que você tem de potencial que pode melhorar a sua roda?",
];

interface Props {}
const MensagensPage: React.FC<Props> = () => {
  const [fraseAtual, setFraseAtual] = useState(arrayDeFrases[0]);
  const [RerenderWrapper, rerender] = useRerenderWrapper();

  const _generateFrases = () => {
    arrayDeFrases.forEach((word, i) =>
      setInterval(() => {
        setFraseAtual(word);
        rerender();
      }, (i + 1) * 4000)
    );
  };

  const [playing, setPlaying] = useState(false);

  const audio = useMemo(
    () =>
      new Howl({
        src: "https://firebasestorage.googleapis.com/v0/b/jogo-vida-cgis.appspot.com/o/musica_cgis_jogo.mp3?alt=media&token=9082a13f-09ca-45af-b387-9ef40e713d68",
        onplay: () => setPlaying(true),
        onpause: () => setPlaying(false),
        loop: true,
      }),
    []
  );

  useMountEffect(() => {
    _generateFrases();
    setTimeout(() => audio.play(), 2000);
  });

  return (
    <PageContainer>
      <div className="mensagens-content">
        <div className="titulo-mensagens">Reflexão...</div>
        <div className="conteudo-mensagens">
          <RerenderWrapper>
            <div className="text-animation">{fraseAtual}</div>
          </RerenderWrapper>
        </div>
        <Button
          size="middle"
          onClick={() => {
            if (!playing) {
              audio.play();
            } else {
              audio.pause();
            }
          }}
          icon={playing ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        >
          {playing ? "pausar música" : "tocar música"}
        </Button>
        <NavLink to="/">
          <div className="btn-go">HOME</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default MensagensPage;
