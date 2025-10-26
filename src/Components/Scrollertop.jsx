import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrollertop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // jab bhi pathname ya query change ho, top pe scroll kare
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional
    });
  }, [pathname, search]);

  return null;
};

export default Scrollertop;
