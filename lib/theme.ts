export const THEME_STORAGE_KEY = "notecommerce-theme";

/**
 * Runs inline in <head> before first paint so the saved (or system) theme is
 * applied without a light-mode flash. Kept as a string because it must not
 * wait for React to hydrate.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
