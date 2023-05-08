import { useEffect, useState } from "react";

const useIsonline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const Online = () => {
    setIsOnline(true);
  };
  const Offline = () => {
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", Online);
    window.addEventListener("offline", Offline);

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);

  return isOnline; // return true or false
};
export default useIsonline;
