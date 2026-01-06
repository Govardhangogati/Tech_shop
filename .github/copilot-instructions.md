# Tech-Shop AI Coding Guidelines

## Architecture Overview
This is a React-based e-commerce application for a tech shop specializing in audio products (headphones, earbuds, earphones). The app uses Vite for build tooling and follows a component-based architecture with static data.

- **Entry Point**: `src/main.jsx` renders `App.jsx`, which currently displays `MainLayout` containing `AppRouterDom` (routing setup is incomplete).
- **Data Layer**: All product, review, and UI data is stored as static JavaScript exports in `src/utils/` (e.g., `productsData.js`, `reviewsData.js`).
- **Components**: Located in `src/components/`, with routing logic in `src/RouterDom/`.
- **Assets**: Images stored in `public/images/products/`, referenced via absolute paths like `/images/products/jbl660nc-1.png`.

## Data Patterns
- Product data follows a consistent schema: `{id, brand, title, category, finalPrice, originalPrice, images[], ratings, rateCount, path}`.
- Categories include "Headphones", "Earbuds", "Earphones" with types "Over Ear", "On Ear", "In Ear" and connectivity "Wireless"/"Wired".
- Filter data (brands, categories, sort options) exported from `src/utils/filterBarData.js`.
- Services and footer menus use arrays of objects with `id`, `title`, and nested `menu` arrays.

## Component Conventions
- Use PascalCase for component names (e.g., `MainLayout.jsx`).
- Export components as named exports: `export const ComponentName = () => {}`.
- Import React icons from `react-icons/fa` for UI elements (e.g., `FaShippingFast`).
- Data imports: `import productsData from './utils/productsData.js'`.

## Developer Workflows
- **Development**: `npm run dev` starts Vite dev server with HMR.
- **Build**: `npm run build` generates production bundle in `dist/`.
- **Linting**: `npm run lint` runs ESLint with flat config; ignores `dist/` folder.
- **Preview**: `npm run preview` serves built app locally.
- ESLint rules: No unused vars except those starting with uppercase (e.g., component names).

## Key Files
- `src/utils/productsData.js`: Core product catalog (417 lines of data).
- `src/components/MainLayout.jsx`: Top-level layout component.
- `package.json`: Scripts and dependencies (React 19, Vite 7).
- `eslint.config.js`: Linting configuration with React hooks and refresh plugins.