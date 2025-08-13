'use client';

import useServices from '@/components/page/SelectService/hocks/useServices';
import { StatusReq } from '@/types';
import { useState, useRef, useEffect, useCallback } from 'react';

export default function useSelectService() {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const { services, status } = useServices(); // припустимо, що useServices може мати loading
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const setSectionRef = useCallback((id: string, el: HTMLDivElement | null) => {
        sectionRefs.current[id] = el;
    }, []);

    // Встановлюємо початкову категорію після завантаження сервісів
    useEffect(() => {
        if (!StatusReq.pending && services.length > 0 && !selectedCategory) {
            setSelectedCategory(services[0].id);
        }
    }, [services, status, selectedCategory]);

    // Скрол до вибраної категорії
    useEffect(() => {
        if (!selectedCategory) return;

        const scrollToElement = () => {
            const element = sectionRefs.current[selectedCategory];
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        // Виконуємо після наступного рендера
        requestAnimationFrame(scrollToElement);
    }, [selectedCategory]);

    return {
        value,
        setValue,
        isFocused,
        setIsFocused,
        selectedCategory,
        setSelectedCategory,
        services,
        setSectionRef,
    };
}
