# Front-battle2.0

# Frontend 2.0

A modern React-based frontend project featuring:
- A top animated loading bar for smooth navigation feedback
- A floating chatbot icon with a pop-up chatbox
- Responsive design and clean UI components

## Features

- **Animated Loader:** Displays a stylish loading bar at the top of the page on every navigation.
- **Chatbot Widget:** Fixed chatbot icon at the bottom right; click to open a chatbox.
- **React Router:** Seamless client-side routing.
- **Styled Components:** All UI elements are styled using `styled-components` for modular and maintainable CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohit72-web/frontend2.0.git
   cd frontend2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

You can deploy this project easily on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).  
For Netlify, make sure to set the build command to `npm run build` and the publish directory to `build`.

If you use React Router, add a `_redirects` file in the `public` folder with:
```
/*    /index.html   200
```

## Folder Structure

```
src/
  components/
    AnimatedLoader.tsx
    ChatbotIcon.tsx
    Chatbox.tsx
  pages/
    Home.tsx
    About.tsx
    Contact.tsx
  App.tsx
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Rohit72
