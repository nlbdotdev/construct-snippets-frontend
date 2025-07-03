# Construct Snippets Frontend

This is the frontend for the Construct Snippets application. It is built with React and Mantine UI components.

## Features
- User authentication (signup, login, logout)
- Create, view, and filter code snippets
- Responsive, modern UI with Mantine
- State management with React Context

## Requirements
- Node.js (v16+ recommended)

## Setup

1. **Clone the repository**

```bash
git clone <repo-url>
cd construct/construct-snippets-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **(Optional) Configure environment variables**

If you want to override the API base URL, create a `.env` file:

```env
REACT_APP_AXIOS=development
```
- When set to `development`, API requests go to `http://localhost:3001/api/`
- Otherwise, requests go to `/api/` (for production/proxy setups)

4. **Run the development server**

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/components/` — Reusable UI components
- `src/pages/` — Top-level pages/routes
- `src/context/` — React Context for app and user state
- `src/util/` — Utility functions (e.g., axios API wrapper)
- `src/global.css` — Global styles

## Development
- Uses Create React App (CRA) scripts
- ESLint and Prettier for code quality

## License
MIT
