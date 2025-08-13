import { useEffect } from 'react';
import { STORAGE_KEYS } from '@/types';
import { storageSubscribers } from '@/utils/storageSubscribers';


export function useStorageObserver<K extends keyof typeof STORAGE_KEYS>(
    key: K,
    callback: (value: any) => void
) {
    const storageKey = STORAGE_KEYS[key];

    useEffect(() => {

        if (!storageSubscribers[storageKey]) storageSubscribers[storageKey] = [];
        storageSubscribers[storageKey].push(callback);


        const current = localStorage.getItem(storageKey);
        callback(current ? JSON.parse(current) : null);

        return () => {

            storageSubscribers[storageKey] = storageSubscribers[storageKey].filter(
                (cb) => cb !== callback
            );
        };
    }, []);
}
