const STORAGE_KEYS = {
  accessibility: "accessibility",
  idleTimeout: "idle-timeout",
  theme: "theme",
  language: "language",
  audio: "audio",
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

export function getLocalStorage<T>(key: StorageKey, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function setLocalStorage<T>(key: StorageKey, value: T): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));

  window.dispatchEvent(
    new CustomEvent("app-storage-change", {
      detail: { key },
    })
  );
}

export function removeLocalStorage(key: StorageKey): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(key);

  window.dispatchEvent(
    new CustomEvent("app-storage-change", {
      detail: { key },
    })
  );
}

export function clearAppLocalStorage(): void {
  if (typeof window === "undefined") {
    return;
  }

  Object.values(STORAGE_KEYS).forEach((key) => {
    window.localStorage.removeItem(key);
  });

  window.dispatchEvent(new CustomEvent("app-storage-reset"));
}

export { STORAGE_KEYS };
