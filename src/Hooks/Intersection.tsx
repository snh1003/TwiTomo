import React, { useEffect } from "react";

//미완성 커스텀 훅 당면 목표인 인피니티 스크롤을 이용하는데 쓸 에정
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
