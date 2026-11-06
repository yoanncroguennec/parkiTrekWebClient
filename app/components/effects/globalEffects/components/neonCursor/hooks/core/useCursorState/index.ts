// État global du curseur
// Centralise l'état global du curseur (hover, click, drag, text...)
"use client";

import { useCallback, useState } from "react";

export default function useCursorState() {
  const [text, setText] = useState<string>("");
  const [hover, setHover] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);
  const [dragging, setDragging] = useState<boolean>(false);

  const showText = useCallback((value: string) => {
    setText(value);
  }, []);

  const hideText = useCallback(() => {
    setText("");
  }, []);

  return {
    text,
    hover,
    pressed,
    dragging,
    setHover,
    setPressed,
    setDragging,
    showText,
    hideText,
  };
}
