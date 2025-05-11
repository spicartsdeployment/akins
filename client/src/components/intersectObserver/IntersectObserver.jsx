import { useEffect, useRef, useState } from "react";

const ScrollObserver = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection Status:', entry.isIntersecting); // ✅ Visibility debug
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger as soon as any part is visible
        rootMargin: "0px 0px -100px 0px", // Make it visible earlier
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.6s ease-out",
        // minHeight: "40vh",
        willChange: "opacity, transform", // ✅ Boosts performance
      }}
    >
      {children}
    </div>
  );
};

export default ScrollObserver;
