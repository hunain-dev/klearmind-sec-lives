import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationType = 'fadeInUp',
    delay = 0,
    duration = 0.8
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial styles based on animation type
    const setInitialStyles = () => {
      switch (animationType) {
        case 'fadeInUp':
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
          break;
        case 'fadeInDown':
          element.style.opacity = '0';
          element.style.transform = 'translateY(-30px)';
          break;
        case 'fadeInLeft':
          element.style.opacity = '0';
          element.style.transform = 'translateX(-30px)';
          break;
        case 'fadeInRight':
          element.style.opacity = '0';
          element.style.transform = 'translateX(30px)';
          break;
        case 'fadeIn':
          element.style.opacity = '0';
          break;
        default:
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
      }
      element.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
    };

    setInitialStyles();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translate(0, 0)';
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, animationType, delay, duration]);

  return elementRef;
};

export default useScrollAnimation;
