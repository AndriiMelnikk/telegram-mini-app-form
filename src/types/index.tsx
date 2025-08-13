export enum StatusReq {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

export const STORAGE_KEYS = {
  SELECT_SERVICE: 'select_service',
  TIME_SERVICE: 'time_service',
} as const;
