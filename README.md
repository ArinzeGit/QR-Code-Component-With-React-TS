# QR code component with `React-TS`

A simple, responsive QR code component built with React and TypeScript as part of the ['QR code component' challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). I did this project to practice building a fundamental component using React, focusing on responsive design and clean code, and to appreciate React's component-based architecture.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![QR Code Component With React-TS Screenshot1](public/QR%20Code%20Component%20With%20React-TS%20Screenshot1.PNG)
![QR Code Component With React-TS Screenshot2](public/QR%20Code%20Component%20With%20React-TS%20Screenshot2.PNG)

### Links

- [GitHub Repository](https://github.com/ArinzeGit/QR-Code-Component-With-React-TS)
- [Live Site URL](https://arinzegit.github.io/QR-Code-Component-With-React-TS/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Flexbox](https://www.w3.org/TR/css-flexbox-1/) - CSS web layout model
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language that extends JavaScript
- [React](https://react.dev/) - JavaScript library
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Vite](https://vitejs.dev/) - React build tool with local development server

### What I learned

- I learned that I can create custom font families by downloading and adding font files, then defining font faces in CSS using the '@font-face' rule:

```css
@font-face {
  font-family: "Outfit";
  src: url("../assets/fonts/Outfit-VariableFont_wght.ttf") format("truetype");
}
```

- I learnt that I cannot open my React TypeScript app directly via the HTML file because the browser doesn't have the capability to handle the dynamic execution of TypeScript code or serve other assets.
  - During development, I need tools like Vite to start a development server that handles dynamic transpiling of TypeScript and JSX to JavaScript, bundling, and serving of my app.
  - For production, I need to run a build command to generate the production build of the app that includes the necessary JavaScript code bundled by Vite, CSS files, and assets. This build can be opened via its HTML file
- I also got more familiar with Bootstrap, Typescript and React.

### Continued development

- Bootstrap
- Typescript
- React

I found these techniques very useful. I will continue focusing on them in future projects to refine and perfect them.

### Useful resources

- [React Tutorial for Beginners](https://youtu.be/SqcY0GlETPk?si=68I5Pxet-DNGzsdM) - This is an amazing tutorial which helped me understand React, TypeScript and Bootstrap. I'd recommend it to anyone still learning these concepts.

## Author

- GitHub - [@ArinzeGit](https://github.com/ArinzeGit)
- Frontend Mentor - [@ArinzeGit](https://www.frontendmentor.io/profile/ArinzeGit)
- LinkedIn - [@Dennings-Owoh](https://www.linkedin.com/in/dennings-owoh-4839971b1/)
- Instagram - [@\_.arinze.\_](https://www.instagram.com/_.arinze._/)
- Twitter - [@Arinze98433402](https://twitter.com/Arinze98433402)
