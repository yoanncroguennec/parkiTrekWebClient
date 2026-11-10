export const SWIPE_THRESHOLD = 120;

export type SwipeDirection = "previous" | "next";

export function getSwipeDirection(deltaX: number): SwipeDirection {
  return deltaX > 0 ? "previous" : "next";
}

export function getSwipeRotation(deltaX: number): number {
  return deltaX * 0.08;
}

export function getNextIndex(currentIndex: number, direction: SwipeDirection): number {
  return direction === "next" ? currentIndex + 1 : currentIndex - 1;
}

export function canNavigate(
  currentIndex: number,
  totalItems: number,
  direction: SwipeDirection
): boolean {
  if (direction === "previous") {
    return currentIndex > 0;
  }

  return currentIndex < totalItems - 1;
}
