export default {
  acolhimento: {
    nome: "Acolhimento",
    color: "#f5cb39",
  },
  vinculo: {
    nome: "Vínculo",
    color: "#ff824d",
  },
  escuta_ativa: {
    nome: "Escuta Ativa",
    color: "#2196f3",
  },
  cohorte: {
    nome: "Cohorte",
    color: "#28b874",
  },
  aproximacao_e_empatia: {
    nome: "Aproximação e Empatia",
    color: "#a058ae",
  },
  pistas_de_comunicacao_nao_verbal: {
    nome: "Pistas de Comunicação Não Veral",
    color: "#4950ba",
  },
  dialogos_colaborativos: {
    nome: "Diálogos Colaborativos",
    color: "#45a6b2",
  },
} as { [key: string]: LabelResult };

type LabelResult = {
  nome: string;
  color: string;
};
