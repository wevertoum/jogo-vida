import React from "react";
import { PointsProvider } from "./contexts/PointsContext";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <PointsProvider>
      <MainRouter />
    </PointsProvider>
  );
}

export default App;
