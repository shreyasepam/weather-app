import { useEffect, useRef } from "react";

export const useDebounce = (callback = () => {}, delay = 0) => {
  const timerRef = useRef(null);

  const onResetHandle = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      onResetHandle();
    };
  }, [delay]);

  return (props) => {
    onResetHandle();
    timerRef.current = setTimeout(() => {
      callback(props);
    }, delay);
  };
};
