'use client';

import { useLoading } from '../hooks/useLoading';
import Loading from '../loading';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const isLoading = useLoading();

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
} 