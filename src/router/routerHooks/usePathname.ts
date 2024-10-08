import { useEffect, useState } from "react";

const usePathname = function () {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return pathname;
};

export default usePathname;
