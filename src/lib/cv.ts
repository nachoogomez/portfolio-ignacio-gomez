/**
 * Single source of truth for the CV asset.
 * The file itself lives in `public/` and is served by the route in `src/index.tsx`.
 */
export const CV_FILENAME = "Ignacio_Gomez_Full_Stack_Dev.pdf";

export const CV_PATH = `/${CV_FILENAME}` as const;
