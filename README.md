# ts-equipo-integracion

Proyecto base en **TypeScript + Jest** con **ramas** `main`, `dev` y `feature/*` por integrante. Incluye **CI** con GitHub Actions.

## Requisitos
- Node.js 18+ (recomendado 20)
- npm 9+

## Instalación
```bash
npm ci
```

> Si no has corrido CI antes, puedes usar `npm install` la primera vez. En CI usamos `npm ci`.

## Scripts
- `npm test` — corre pruebas y coverage.
- `npm test:watch` — modo de observación.
- `npm run build` — compila a `dist/`.

## Estructura
```
src/
  api/           # Interfaces (IAdder, ISubtractor, IMultiplier)
  impl/          # Implementaciones (se agregan por integrante)
  integration/   # Orquestación/Calculator (se agrega por C)
tests/
  unit/          # Pruebas unitarias por servicio
  integration/   # Pruebas de integración (se agregarán por C)
```

> Las pruebas de ejemplo en `tests/` están marcadas como `todo` para que CI pase en el inicio. Cada integrante reemplaza su correspondiente archivo `.spec.ts` con pruebas reales cuando agregue su servicio.

## Convención de commits
Usar **Conventional Commits**:
- `feat: ...` nueva funcionalidad
- `fix: ...` corrección
- `test: ...` pruebas
- `chore: ...` tareas varias
- `docs: ...` documentación
- `ci: ...` cambios de CI
- `refactor: ...` refactor sin cambio funcional

Ejemplos:
- `feat(adder): implementación de AdderService`
- `test(subtractor): casos bordes con negativos`

## Flujo de ramas
1. `main`: rama estable (solo merges desde `dev` por PR de release).
2. `dev`: integración continua del equipo (PRs desde `feature/*`).
3. `feature/<nombre>`: una por integrante (ej. `feat/adder` `feat/subtractor` `feat/multiplier`).

## Cómo correr local
```bash
npm ci
npm test
```

---

## Guía rápida por integrante

### Integrante A (Adder)
1. Crear repo en GitHub vacío (sin README ni .gitignore).
2. Inicializar local, añadir remoto, ramas `main` y `dev`:
   ```bash
   git init
   git remote add origin <URL_DE_TU_REPO>
   git checkout -b main
   git add .
   git commit -m "chore: bootstrap proyecto base TypeScript + Jest + CI"
   git push -u origin main
   git checkout -b dev
   git push -u origin dev
   ```
3. Crear rama de feature:
   ```bash
   git checkout -b feat/adder
   ```
4. Agregar archivos de **Integrante A** (IAdder, AdderService, adder.spec.ts), `npm test` y subir:
   ```bash
   npm ci
   npm test
   git add .
   git commit -m "feat(adder): implementar suma y pruebas"
   git push -u origin feat/adder
   ```
5. Abrir **Pull Request** de `feat/adder` → `dev` en GitHub y esperar CI verde. Hacer **Merge** con squash/merge.

### Integrante B (Subtractor)
1. Clonar y crear su rama:
   ```bash
   git clone <URL_DEL_REPO>
   cd ts-equipo-integracion
   git checkout dev
   git checkout -b feat/subtractor
   ```
2. Agregar archivos de **Integrante B** (ISubtractor, SubtractorService, subtractor.spec.ts), probar y subir:
   ```bash
   npm ci
   npm test
   git add .
   git commit -m "feat(subtractor): implementar resta y pruebas"
   git push -u origin feat/subtractor
   ```
3. Abrir PR `feat/subtractor` → `dev`, revisar CI y **Merge**.

### Integrante C (Multiplier + Integración)
1. Clonar y crear su rama:
   ```bash
   git clone <URL_DEL_REPO>
   cd ts-equipo-integracion
   git checkout dev
   git checkout -b feat/multiplier
   ```
2. Agregar archivos de **Integrante C** (IMultiplier, MultiplierService, multiplier.spec.ts), probar y subir:
   ```bash
   npm ci
   npm test
   git add .
   git commit -m "feat(multiplier): implementar multiplicación y pruebas"
   git push -u origin feat/multiplier
   ```
3. Abrir PR `feat/multiplier` → `dev`, merge tras CI verde.
4. (Luego) Crear rama `feat/integration-calculator` y añadir `src/integration/Calculator.ts` + `tests/integration/calculator.integration.spec.ts`, probar y PR → `dev`.
   ```bash
   git checkout -b feat/integration-calculator
   npm test
   git add .
   git commit -m "feat(integration): Calculator y pruebas de integración"
   git push -u origin feat/integration-calculator
   ```

### Release a main
Una vez que `dev` esté estable y probado, abrir PR `dev` → `main` (squash merge). Crear tag si aplica.

---

## CI (GitHub Actions)
Cada **push** y **PR** corre `npm test`. El merge a `dev` debe requerir CI verde.
