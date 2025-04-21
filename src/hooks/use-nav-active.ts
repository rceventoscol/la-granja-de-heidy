
import { useLocation } from "react-router-dom";

export const useNavActive = () => {
  const location = useLocation();

  const isPathActive = (paths: string[]) => {
    return paths.some((p) => location.pathname.startsWith(p));
  };

  return { isPathActive };
};
