'use client';

import useServices from '@/components/page/SelectService/hocks/useServices';
import { StatusReq } from '@/types';
import { useState, useRef, useEffect, useCallback, use } from 'react';

export default function useSelectService() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { services, status } = useServices();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const setSectionRef = useCallback((id: string, el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  }, []);

  useEffect(() => {
    if (!StatusReq.pending && services.length > 0 && !selectedCategory) {
      setSelectedCategory(services[0].id);
    }
  }, [services, status, selectedCategory]);

  useEffect(() => {
    if (!selectedCategory) return;

    const scrollToElement = () => {
      const element = sectionRefs.current[selectedCategory];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    requestAnimationFrame(scrollToElement);
  }, [selectedCategory]);

  return {
    searchQuery,
    setSearchQuery,
    isFocused,
    setIsFocused,

    selectedCategory,
    setSelectedCategory,

    services,
    setSectionRef,

    cards: services,
  };
}
