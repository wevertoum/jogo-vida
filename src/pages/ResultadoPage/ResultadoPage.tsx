import PageContainer from "components/PageContainer/TypingTexts";
import React, { useMemo, useState } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

import { NavLink } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import "./ResultadoPage.less";
import labelsResult from "utils/labels/labelsResult";
import { Button } from "antd";
import useRerenderWrapper from "hooks/useRerenderWrapper";
import { Howl } from "howler";
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import useMountEffect from "hooks/lifecycle/useMountEffect";
import useUnmountEffect from "hooks/lifecycle/useUnmountEffect";
import useLocalStorage from "hooks/useLocalStorage";

const arrayDeFrases = [
  "Como você se sentiu depois dessa construção (a roda)?",
  "O que te chamou mais atenção nessa vivência?",
  "Quais crenças internas podem estar dificultando o andamento da sua roda?",
  "Existem atitudes que você gostaria de aprimorar ou mudar?",
  "O que você tem de potencial que pode melhorar a sua roda?",
];

interface Props {}
const ResultadoPage: React.FC<Props> = () => {
  const [points] = useLocalStorage<Models.Points>(
    "pontuacao",
    {} as Models.Points
  );
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
        volume: 0.3,
      }),
    []
  );

  useUnmountEffect(() => {
    audio.stop();
  });

  const data = [
    {
      value: points.acolhimento,
      name: "Acolhimento",
      itemStyle: {
        normal: {
          color: "#f5cb39",
        },
      },
    },
    {
      value: points.vinculo,
      name: "Vínculo",
      itemStyle: {
        normal: {
          color: "#ff824d",
        },
      },
    },
    {
      value: points.escuta_ativa,
      name: "Escuta ativa",
      itemStyle: {
        normal: {
          color: "#2196f3",
        },
      },
    },
    {
      value: points.cohorte,
      name: "Cohorte",
      itemStyle: {
        normal: {
          color: "#28b874",
        },
      },
    },
    {
      value: points.aproximacao_e_empatia,
      name: "Aproximação e empatia",
      itemStyle: {
        normal: {
          color: "#a058ae",
        },
      },
    },
    {
      value: points.pistas_de_comunicacao_nao_verbal,
      name: "Pistas de comunicação não verbal",
      itemStyle: {
        normal: {
          color: "#4950ba",
        },
      },
    },
    {
      value: points.dialogos_colaborativos,
      name: "Diálogos colaborativos",
      itemStyle: {
        normal: {
          color: "#45a6b2",
        },
      },
    },
  ];

  let option = {
    backgroundColor: "rgb(43, 51, 59)",
    toolbox: {
      show: true,
      feature: {
        mark: {
          show: true,
        },
        magicType: {
          show: true,
          type: ["pie", "funnel"],
        },
        restore: false,
        saveAsImage: {
          show: true,
          title: "Salvar a roda",
        },
      },
    },
    graphic: [
      {
        type: "group",
        rotation: Math.PI / 4,
        bounding: "raw",
        right: 200,
        bottom: 100,
        z: 100,
      },
      {
        type: "group",
        left: "0",
        top: "bottom",
      },
    ],
    tooltip: {
      trigger: "item",
    },
    title: {
      text: "Roda do engajamento",
      left: "center",
      top: 20,
      textStyle: {
        color: "#fff",
        fontSize: 25,
      },
    },
    calculable: true,
    legend: false,
    series: [
      {
        type: "pie",
        animationDuration: 2000,
        animationEasing: "quarticInOut",
        radius: [10, 150],
        avoidLabelOverlap: false,
        startAngle: 90,
        hoverOffset: 5,
        center: ["50%", "50%"],
        roseType: "area",
        selectedMode: "multiple",
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          normal: {
            show: true,
            smooth: false,
            length: 20,
            length2: 10,
          },
          emphasis: {
            show: true,
          },
        },
        data: data,
      },
    ],
  };

  const style = {
    height: "500px",
    width: "1000px",
  };

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
                  <h2
                    style={{
                      color: `${labelsResult[item].color}`,
                    }}
                    className="item-feedback"
                    key={i}
                  >
                    {labelsResult[item].nome}: {nota}%
                  </h2>
                ))}
            </div>
            <div className="grafico-resultados">
              <ReactEcharts
                option={option}
                style={style}
                className="pie-chart"
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
