import React, { useEffect } from "react";
//공부용 코드 미완성
//Intersection Observer api문서를 읽고 완성할것
//인피니티 스크롤에 이용하는것이 당면의 목표 
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
