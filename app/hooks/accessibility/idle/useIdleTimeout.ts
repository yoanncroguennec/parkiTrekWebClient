"use client";

import { useCallback, useSyncExternalStore } from "react";

import {
  getLocalStorage,
  setLocalStorage,
  STORAGE_KEYS,
} from "@/app/utils/constants/storage/localStorage";
import { idleConfig } from "@/app/components/effects/globalEffects/components/idleScreen/constants";


// -----------------------------------------------------------------------------
// DEFAULT CONFIGURATION
// -----------------------------------------------------------------------------

export const DEFAULT_TIMEOUT = idleConfig.timeout;

// -----------------------------------------------------------------------------
// GET TIMEOUT
// -----------------------------------------------------------------------------

function getTimeout(): number {
  return getLocalStorage<number>(
    STORAGE_KEYS.idleTimeout,
    DEFAULT_TIMEOUT,
  );
}

// -----------------------------------------------------------------------------
// SUBSCRIBE TO STORAGE CHANGES
// -----------------------------------------------------------------------------

function subscribe(callback: () => void) {
  const handleStorageChange = (event: Event) => {
    if (
      event instanceof CustomEvent &&
      event.detail?.key !== STORAGE_KEYS.idleTimeout
    ) {
      return;
    }

    callback();
  };

  window.addEventListener("app-storage-change", handleStorageChange);
  window.addEventListener("app-storage-reset", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("app-storage-change", handleStorageChange);
    window.removeEventListener("app-storage-reset", callback);
    window.removeEventListener("storage", callback);
  };
}

// -----------------------------------------------------------------------------
// HOOK
// -----------------------------------------------------------------------------

export default function useIdleTimeout() {
  const timeout = useSyncExternalStore(
    subscribe,
    getTimeout,
    () => DEFAULT_TIMEOUT,
  );

  const updateTimeout = useCallback((value: number) => {
    setLocalStorage(STORAGE_KEYS.idleTimeout, value);
  }, []);

  return {
    timeout,
    setTimeout: updateTimeout,
    DEFAULT_TIMEOUT,
  };
}