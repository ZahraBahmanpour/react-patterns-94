import { useEffect } from "react";

const useClickOutside = (elementRef, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(event.target)
      ) {
        callback();
      }
      return;
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [elementRef, callback]);
};

export default useClickOutside;
