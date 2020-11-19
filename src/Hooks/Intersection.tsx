import React, { useEffect } from "react";

export const useIntersection = (ref) => {
  const [intersecting, setIntersecting] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  });

  return intersecting;
};
