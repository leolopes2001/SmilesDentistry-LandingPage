import { useLayoutEffect, useState } from "react";

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([window.innerWidth]);

  useLayoutEffect(() => {
    const getUpdatedSize = () => {
      setSize([window.innerWidth]);
    };

    window.addEventListener("resize", getUpdatedSize);
    getUpdatedSize();

    return () => window.removeEventListener("resize", getUpdatedSize);
  }, []);

  return size;
};

export default useWindowSize;
