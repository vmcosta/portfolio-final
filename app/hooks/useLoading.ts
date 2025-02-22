'use client';

import { useState, useEffect } from 'react';

export function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loader for at least 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading;
} 