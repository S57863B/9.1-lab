# Internal Component Library

A reusable, type-safe React UI component library built with TypeScript and Tailwind CSS. 

## Quick Start

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`

## Available Components

* **`AlertBox`**: Displays feedback messages (`success`, `error`, `warning`, `info`) with optional self-closing logic.
* **`UserProfileCard`**: Displays a user's avatar and info. Features optional toggles for email, role, and an edit button.
* **`ProductDisplay`**: A product card with dynamic stock status logic (automatically disables the buy button if out of stock).

## Basic Usage Example
```tsx
import { AlertBox } from './components/AlertBox/AlertBox';

export const App = () => (
  <AlertBox 
    type="success" 
    message="Task completed!" 
    onClose={() => console.log('closed')} 
  />
);