import { THEME } from "./actionTypes";

export function addTheme(payload) {
  return { type: THEME.ADD, payload };
}

export function resetTheme(payload) {
  return { type: THEME.RESET, payload };
}
