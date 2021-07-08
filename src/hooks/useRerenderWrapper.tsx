import React, { useCallback, useState } from "react";

const useRerenderWrapper = function (timeout?: number): [React.FC, () => void] {
  const [render, setRender] = useState(true);

  const Wrapper: React.FC = useCallback(
    ({ children }) => <>{render && children}</>,
    [render]
  );

  const forceRender = useCallback(() => {
    setRender(false);
    setTimeout(() => setRender(true), timeout);
  }, [timeout]);

  return [Wrapper, forceRender];
};

export default useRerenderWrapper;
