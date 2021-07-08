import PageContainer from "components/PageContainer/TypingTexts";
import PointsContext from "contexts/PointsContext";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PolarArea } from "react-chartjs-2";
import "./ResultadoPage.less";

interface Props {}
const ResultadoPage: React.FC<Props> = () => {
  const { points } = useContext(PointsContext);
  return (
    <PageContainer>
      <div className="resultados-content">
        <div className="titulo-resultados">Resultado!</div>
        <div className="conteudo-resultados">
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
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>

        <NavLink to="/mensagens">
          <div className="btn-go-resultados">OK!</div>
        </NavLink>
      </div>
    </PageContainer>
  );
};

export default ResultadoPage;
