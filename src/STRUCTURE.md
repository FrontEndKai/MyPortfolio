## `src` Directory Overview

This folder is the **frontend source code** structure.

- `assets/` — Static assets bundled by Vite (images, SVGs, fonts). Example: `react.svg`.
- `auth/` — Frontend auth logic (login/register UI, token storage helpers, route guards).
- `controllers/` — UI-facing “controllers” (optional pattern): coordinate complex view actions (form submit flows, orchestration between services and state). Many projects instead keep this logic in hooks or components.
- `middleware/` — Frontend-only middleware patterns (optional): wrappers/interceptors around fetch, routing, or state actions. (More common on the backend; only use if it fits your architecture.)
- `routes/` — Frontend routing config (React Router route definitions, route loaders, route-level layouts).
- `services/` — API/client layer (functions to call your backend: `getCampers()`, `createReservation()`, etc.).
- `styles/` — Shared styling resources (CSS modules, theme tokens, variables, reusable class utilities).
- `utils/` — Small reusable helpers (formatters, validators, date helpers, constants).
