import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IRaquete } from "../Types";

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions
}

export const ScrollToTop = (props: { children: any; }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}



export const FormatPrice = (price: number) => `R$ ${price.toFixed(3)},00`
export const matchProductsByBrands = (opt: string, raquetes: IRaquete[]) => raquetes?.map(raquete => raquete?.role.category === opt ? raquete.title : '').filter(i=>i)
