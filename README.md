# npx create-react-app 01_basic_react
- npx node package executer 
- this above take lots of time to initialize the react project
- it also unnecessary downloads files which are not required
- npm run start -to run the the file during the development
- npm run build - create build folder and it is used for production level during deployement (it create html css javascript from react and serve direclty to client)
- clearing the file from src directly and app.js and index.js only going to remain then run
- react-scripts dependencies is responsible to add the script tag in index.html from behind in this case.

# npm create vite@latest
√ Project name: ... 02_basic_react_vite
√ Select a framework: » React
√ Select a variant: » JavaScript

- vite is a bundler for react which install fast react project
- we have to manually install node modules (npm install)
- it only add necessary dependecies for starter react project which is-> react and reactdom
- npm run dev - to run the project
- npm run build - for production level build
- clearing the file from src directly and App.jsx and main.jsx only going to remain then run
- In here script tag (main.jsx) is already link by default in index.html
- here name the file with the .jsx
- here function 0r component first letter should be upperCase
- Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</> or we can use div tag also