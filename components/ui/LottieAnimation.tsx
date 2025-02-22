'use client';

import { useEffect, useRef } from 'react';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({ animationData, loop = true, autoplay = true }: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('lottie-web').then((Lottie) => {
      if (containerRef.current) {
        lottieInstance.current = Lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData,
        });
      }
    });

    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
      }
    };
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} />;
};

export default LottieAnimation; 