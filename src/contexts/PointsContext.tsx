import React, { createContext, useState } from "react";

const PointsContext = createContext({} as Contexts.Points);

interface Props {}
export const PointsProvider: React.FC<Props> = ({ children }) => {
  const [points, setPoints] = useState<Models.Points>({} as Models.Points);

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
