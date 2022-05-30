import { useEffect, useState } from "react";

//Custom Hook to get scrren width and height
//Got from stack overflow

const getWindowDimensions = () => {
  const {innerHeight: height, innerWidth: width} = window
  return {
    height,
    width
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions