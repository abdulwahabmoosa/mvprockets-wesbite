# MVPRockets website

React + TypeScript + Tailwind CSS, built with [Vite](https://vite.dev) and routed with React Router.

## Scripts

```bash
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Structure

- `src/main.tsx`: entry point
- `src/App.tsx`: shared layout (navbar, footer) and routes
- `src/pages/`: one component per route
- `src/components/`: atoms and organisms
- `public/`: static assets served from `/`

## Deploying

This is a single-page app, so the host must serve `index.html` for every unknown path
(for example `/about-us` or `/team/praveen-mv`), or those URLs will 404 on refresh.
