@AGENTS.md

# chrysal-core — notas específicas de este repo

Preferencias generales en `~/.claude/CLAUDE.md` (que cubre solo lo transversal a todos los proyectos). Esto es lo propio de este repo. El bloque importado arriba lo generó el instalador de Next.js — no lo edites a mano.

- **Repo vitrina.** Es el sitio de la marca y el punto de entrada que ve primero un cliente o recruiter que revisa el portafolio. Los cambios acá tienen más visibilidad que en cualquier otro repo; ver `Managment/proyectos/chrysal-core.md`.
- Cero comentarios en todo `src/` — es el repo que más estrictamente sigue la regla global de código explicado por nombres.
- `tsconfig.json` con `strict: true`, sin uso de `any` en ningún archivo. Mantenerlo así.
- Convención de colocación: `_components/` y `_lib/data/` junto a la ruta que los usa; lo compartido entre rutas vive en `src/components`, `src/hooks`, `src/lib`. No promover algo a compartido hasta que lo use más de una ruta.
- Hook compartido `useAutoSlider` para animaciones cíclicas, reutilizado en varias secciones — usarlo en vez de reimplementar el ciclo.
- Tailwind 4 con tokens de diseño compartidos, más clases custom solo para lo que Tailwind no cubre (gradientes multi-stop, keyframes).
- **Sin Prettier configurado** — es el único repo inspeccionado sin él. Está decidido agregarlo con `prettier-plugin-tailwindcss` (decisión 2026-07-20, ver `Managment/backlog.md`); recordar que Prettier 3 no carga el plugin si no está listado en `.prettierrc`.
- **Sin CI/CD.** Pendiente replicar los dos workflows ya probados en `pokedex-app` y `sofi-nails` (CI en `development` con PR automático, deploy en `main`), ver `Managment/backlog.md`.
- **Repo público** en la org `chrysalcore` desde el 2026-08-03 (antes privado en la cuenta personal; se movió para que Vercel reconectara el deploy sin plan Pro). Cualquier cambio queda a la vista de clientes y reclutadores.
- **Proyectos (`src/app/projects/_lib/data/projects.ts`): el orden del array define la sección.** `/projects` muestra `slice(0, 3)` como "Live Webs" y `slice(4)` como "Templates"; la home muestra `slice(0, 4)`, con la tarjeta "View All Pages" en el índice 3. Agregar o quitar un proyecto corre las secciones: reemplazar en el mismo lugar o pasar a un campo `kind`.
- **Al cambiar una captura de `public/imgs/`, cambiar también el nombre del archivo.** `next/image` cachea la versión optimizada por URL: con el mismo nombre se siguió sirviendo la captura vieja (2026-11-02, visto en local con `.next/cache/images`).
