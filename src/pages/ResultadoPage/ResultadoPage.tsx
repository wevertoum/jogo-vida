import PageContainer from "components/PageContainer/TypingTexts";
import PointsContext from "contexts/PointsContext";
import React, { useContext } from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

import { NavLink } from "react-router-dom";
import { PolarArea } from "react-chartjs-2";
import "./ResultadoPage.less";
import labelsResult from "utils/labels/labelsResult";

interface Props {}
const ResultadoPage: React.FC<Props> = () => {
  const { points } = useContext(PointsContext);
  return (
    <PageContainer>
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

        <NavLink to="/mensagens">
          <div className="btn-go">OK!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default ResultadoPage;
