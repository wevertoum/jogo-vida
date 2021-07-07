/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

namespace Contexts {
  interface Points {
    points: Models.Points;
    setPoints: React.Dispatch<React.SetStateAction<Models.Points>>;
  }
}
