# Onboarding at Briskk

1. **Install Yarn**: If you haven't installed Yarn yet, you'll need to do that first. You can install Yarn globally using npm:
   ```bash
   npm install -g yarn
   ```

2. **Create a New React App**: Use the create-react-app command with Yarn to set up a new React project. Open your terminal and run:
   ```bash
   yarn create react-app my-app
   ```
   Replace `my-app` with the name you want for your project.

3. **Navigate to Your Project Directory**: After the app is created, navigate to the project directory:
   ```bash
   cd my-app
   ```

4. **Start the Development Server**: Run the app locally by starting the development server:
   ```bash
   yarn start
   ```

5. **Open Your App in a Browser**: Once the server is running, you can view your app by opening your browser and navigating to `http://localhost:3000`.

## Table of Contents
- [JSX](#jsx)
- [Components](#components)
- [Props](#props)
- [State](#state)
- [Lifecycle Methods](#lifecycle-methods)
- [Hooks](#hooks)

### JSX
**JSX** stands for JavaScript XML. It allows you to write HTML structures within JavaScript code, making it easier to create and visualize the structure of your UI components. JSX must be transpiled to JavaScript before it can be run in the browser.

### Components
**Components** are the building blocks of a React application. They are reusable pieces of code that represent a part of the user interface. Components can be class-based or function-based. Each component manages its own content, presentation, and behavior.

### Props
**Props** (short for properties) are inputs to components. They are used to pass data from one component to another, making components more dynamic and reusable. Props are read-only, meaning they cannot be modified by the component that receives them.

### State
**State** is a built-in object used to manage data within a component. Unlike props, state is mutable and can be updated by the component itself. State changes trigger re-renders, allowing the UI to reflect the latest data.

### Lifecycle Methods
**Lifecycle Methods** are special methods in class components that allow you to run code at specific times in a component's lifecycle. Examples include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. These methods help manage side effects, like fetching data or cleaning up resources.

### Hooks
**Hooks** are functions that let you use state and other React features in function components. Two of the most commonly used hooks are `useState` and `useEffect`.

- **useState**: This hook allows you to add state to a function component. It returns an array with the current state value and a function to update it.
  ```javascript
  const [state, setState] = useState(initialState);
  ```

- **useEffect**: This hook lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the first render and after every update unless you provide a dependency array to control when it should run.
  ```javascript
  useEffect(() => {
    // Side effect code
  }, [dependencies]);
  ```

**Exercise:**
- Build a counter app with increment, decrement, and reset functionality using `useState`.
- Create a weather app UI using mock data, with components for:
  - Search bar
  - Current weather details (temperature, condition)
  - History of previous searches


# Tailwind CSS Guide

## Overview
This guide covers essential topics and core utilities in Tailwind CSS, including utility-first CSS, responsive design, theming, and key utilities such as Flexbox, grid, spacing, colors, and typography.

## Topics

### Utility-First CSS
Utility-first CSS is a methodology where you build designs using small, single-purpose utility classes. Tailwind CSS is a popular framework that follows this approach, offering a vast array of utility classes to handle most of your styling needs directly in your HTML.

### Responsive Design
Tailwind CSS makes it easy to create responsive designs with its mobile-first approach and responsive utility variants. You can apply different styles at various breakpoints using prefix modifiers like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="text-center md:text-left lg:text-right">
  <!-- Content here will be centered on small screens, left-aligned on medium screens, and right-aligned on large screens -->
</div>
```

### Theming
Tailwind CSS allows extensive customization through its configuration file (`tailwind.config.js`). You can extend the default theme, customize existing values, or add new ones for colors, spacing, typography, and more.

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
      },
    },
  },
};
```

## Core Utilities

### Flexbox
Tailwind CSS provides utilities for building flexible layouts with Flexbox. You can control direction, alignment, justification, and wrapping of flex items using classes like `flex`, `flex-row`, `justify-center`, `items-center`, and `flex-wrap`.

```html
<div class="flex flex-row justify-center items-center">
  <div class="p-4">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
</div>
```

### Grid
The grid system in Tailwind CSS allows you to create complex layouts with ease. Define columns, rows, and gaps between grid items using utilities such as `grid-cols-3`, `gap-4`, and `row-span-2`.

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Spacing
Tailwind CSS includes utility classes for controlling padding, margin, and space between elements. Use classes like `p-4`, `m-4`, `space-x-4`, and `space-y-4` to manage spacing.

```html
<div class="p-4 m-4">
  <div class="space-y-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
</div>
```

### Colors
Tailwind CSS provides a comprehensive set of color utilities for setting background colors, text colors, border colors, and more. Classes like `bg-blue-500`, `text-white`, `border-gray-200` help in applying colors consistently.

```html
<div class="bg-blue-500 text-white p-4">
  This is a blue box with white text.
</div>
```

### Typography
The Typography plugin in Tailwind CSS allows you to style text with beautiful, consistent typographic designs. Use the `prose` class to style long-form content.

```html
<div class="prose">
  <h1>Title</h1>
  <p>This is a paragraph with Tailwind CSS typography.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</div>
```

## Conclusion
Tailwind CSS is a powerful utility-first framework that enables rapid development with consistent styling. By leveraging its extensive core utilities and customizable theme, you can create responsive, well-designed web applications efficiently.

# Integrating Tailwind CSS with a Yarn-based React Project

Integrating Tailwind CSS with a Yarn-based React project is straightforward. Here's a step-by-step guide to get you up and running:


## 1. Install Tailwind CSS
Open your terminal in the root of your React project and run the following command to install Tailwind CSS and its dependencies:
```bash
yarn add -D tailwindcss postcss autoprefixer
```

## 2. Initialize Tailwind CSS
Generate the Tailwind configuration files by running:
```bash
npx tailwindcss init -p
```

This will create two files: `tailwind.config.js` and `postcss.config.js`.

## 3. Configure `tailwind.config.js`
Open the `tailwind.config.js` file and set the `content` property to point to your React components:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Add Tailwind CSS to your styles
Next, you need to import Tailwind's base, components, and utilities into your main CSS file. If you don’t have a main CSS file, create one (e.g., `src/index.css`) and add the following lines:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. Import the CSS file
Make sure to import the CSS file in your `src/index.js` or `src/index.tsx`:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this import is present
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

## 6. Start using Tailwind CSS
Now you can start using Tailwind CSS classes in your React components. For example:
```jsx
function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default App;
```

And that's it! Your React project should now be set up to use Tailwind CSS. Enjoy styling your components with ease!
```
```
## Next.js Basics

This repository covers the basic concepts of Next.js, including routing, data fetching, and API routes.

## Table of Contents
1. [Introduction](#introduction)
2. [Routing](#routing)
   - [Pages](#pages)
   - [Dynamic Routes](#dynamic-routes)
3. [Data Fetching](#data-fetching)
   - [getStaticProps](#getstaticprops)
   - [getServerSideProps](#getserversideprops)
4. [API Routes](#api-routes)

## Introduction
Next.js is a powerful React framework that enables server-side rendering and static site generation. This guide will help you understand the basics of Next.js, including routing, data fetching, and creating API routes.

## Routing
Next.js uses a file-based routing system. Each file in the `pages` directory corresponds to a route in the application.

### Pages
To create a new page, simply add a new file to the `pages` directory. For example, `pages/about.js` will create a route at `/about`.

```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}
```
### Dynamic Routes
Dynamic routes allow you to create pages with dynamic content. Use square brackets to define a dynamic route.

```jsx
// pages/posts/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Post {id}</h1>;
}
```

## Data Fetching
Next.js provides multiple methods for fetching data in your applications, including `getStaticProps` and `getServerSideProps`.

### getStaticProps
`getStaticProps` is used to fetch data at build time. It is used for static site generation (SSG).

```jsx
// pages/posts/[id].js
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
```

### getServerSideProps
`getServerSideProps` is used to fetch data at request time. It is used for server-side rendering (SSR).

```jsx
// pages/posts/[id].js
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
```

## API Routes
Next.js allows you to create API endpoints with ease. API routes reside in the `pages/api` directory and are used to handle requests like a traditional server.

```jsx
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, world!' });
}
```

With this setup, you now have a basic understanding of Next.js routing, data fetching, and API routes. For more detailed information, refer to the [Next.js documentation](https://nextjs.org/docs).

```
