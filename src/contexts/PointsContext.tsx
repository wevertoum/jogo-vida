import useLocalStorage from "hooks/useLocalStorage";
import React, { createContext } from "react";

const PointsContext = createContext({} as Contexts.Points);

interface Props {}
export const PointsProvider: React.FC<Props> = ({ children }) => {
  const [points, setPoints] = useLocalStorage<Models.Points>(
    "pontuacao",
    {} as Models.Points
  );

  return (
    <PointsContext.Provider
      value={{
        points,
        setPoints,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
};

export default PointsContext;
