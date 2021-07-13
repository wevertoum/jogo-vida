import PageContainer from "components/PageContainer/TypingTexts";
import PointsContext from "contexts/PointsContext";
import React, { useContext, useMemo, useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

import { NavLink } from "react-router-dom";
import { PolarArea } from "react-chartjs-2";
import "./ResultadoPage.less";
import labelsResult from "utils/labels/labelsResult";
import { Button } from "antd";
import useRerenderWrapper from "hooks/useRerenderWrapper";
import { Howl } from "howler";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import useMountEffect from "hooks/lifecycle/useMountEffect";

const arrayDeFrases = [
  "Como você se sentiu depois dessa construção (a roda)?",
  "O que te chamou mais atenção nessa vivência?",
  "Quais crenças internas podem estar dificultando o andamento da sua roda?",
  "Existem atitudes que você gostaria de aprimorar ou mudar?",
  "O que você tem de potencial que pode melhorar a sua roda?",
];

interface Props {}
const ResultadoPage: React.FC<Props> = () => {
  const { points } = useContext(PointsContext);
  const [result, setResult] = useState(true);
  const [playing, setPlaying] = useState(false);
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

  useMountEffect(() => {
    _generateFrases();
  });

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

  return (
    <PageContainer>
      {result ? (
        <div className="resultados-container">
          <Fade left>
            <div className="titulo-resultados">Resultado!</div>
          </Fade>
          <div className="resultados-content">
            <div className="infos-resultados">
              {Object.entries(points)
                .sort(function (a, b) {
                  if (a[1] > b[1]) {
                    return -1;
                  }
                  if (a[1] < b[1]) {
                    return 1;
                  }
                  return 0;
                })
                .map(([item, nota], i) => (
                  <h2 className="item-feedback" key={i}>
                    {labelsResult[item]}: {nota}%
                  </h2>
                ))}
            </div>
            <div className="grafico-resultados">
              <PolarArea
                type
                data={{
                  labels: [
                    "Acolhimento",
                    "Vínculo",
                    "Escuta ativa",
                    "Cohorte",
                    "Aproximação e empatia",
                    "Pistas de comunicação não verbal",
                    "Diálogos colaborativos",
                  ],
                  datasets: [
                    {
                      label: "Resultados",
                      backgroundColor: [
                        "#f5cb39",
                        "#ff824d",
                        "#2196f3",
                        "#28b874",
                        "#a058ae",
                        "#4950ba",
                        "#45a6b2",
                      ],
                      data: [
                        points.acolhimento,
                        points.vinculo,
                        points.escuta_ativa,
                        points.cohorte,
                        points.aproximacao_e_empatia,
                        points.pistas_de_comunicacao_nao_verbal,
                        points.dialogos_colaborativos,
                      ],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },

                    tooltip: {
                      callbacks: {
                        labelTextColor: function (context: any) {
                          return "#ffffff";
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div
            className="btn-go"
            onClick={() => {
              setResult(false);
              audio.play();
            }}
          >
            OK!
          </div>
        </div>
      ) : (
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
      )}
    </PageContainer>
  );
};

export default ResultadoPage;
