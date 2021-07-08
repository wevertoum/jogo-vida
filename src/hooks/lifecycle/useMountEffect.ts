import { useEffect, useCallback } from "react";

const useMountEffect = function (effect: () => void | Promise<void>) {
  const mountEffect = useCallback(() => {
    effect();
  }, [effect]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(mountEffect, []);
};

export default useMountEffect;
