//연습용(공부용) hooks 현재 사용하지 않음 (0.5ver)
import React, { useEffect, useRef, useState } from "react";

const useDebounce = (cb: any, delay: number) => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState();
  const lastRan = useRef(Date.now());
  console.log(check);
  useEffect(() => {
    if (!check) {
      setCheck(true);
      const timer = setTimeout(() => {
        if (Date.now() - lastRan.current >= delay) {
          setValue(cb());
          lastRan.current = Date.now();
        }
      }, delay - (Date.now() - lastRan.current));
      return () => {
        clearTimeout(timer);
      };
    }
  }, [cb, delay]);
  return value;
};

export default useDebounce;
