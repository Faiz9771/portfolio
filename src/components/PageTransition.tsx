import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

const variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => setIsFirstLoad(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router]);

  if (isFirstLoad) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
