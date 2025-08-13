type Callback = (value: any) => void;

export const storageSubscribers: Record<string, Callback[]> = {};

export function notifyStorageSubscribers(key: string, value: any) {
    const subscribers = storageSubscribers[key];
    if (subscribers) {
        subscribers.forEach((cb) => cb(value));
    }
}
