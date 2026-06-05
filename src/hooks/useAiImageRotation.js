import { useSyncExternalStore } from "react";

const ROTATION_INTERVAL = 25000;
let currentTick = 0;
const listeners = new Set();

if (typeof window !== "undefined" && !window.__apnaBusinessAiRotationTimer) {
  window.__apnaBusinessAiRotationTimer = window.setInterval(() => {
    currentTick += 1;
    listeners.forEach((listener) => listener());
  }, ROTATION_INTERVAL);
}

const normalizePrompt = (prompt) =>
  encodeURIComponent(
    prompt
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[^a-zA-Z0-9 ,.-]/g, ""),
  );

export const buildAiImageUrl = (prompt, width, height, seed) => {
  const normalizedPrompt = normalizePrompt(prompt);
  return `https://image.pollinations.ai/prompt/${normalizedPrompt}?width=${width}&height=${height}&seed=${seed}&nologo=true&enhance=true&model=flux`;
};

export const useAiImageRotation = () => {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => currentTick,
    () => currentTick,
  );
};
