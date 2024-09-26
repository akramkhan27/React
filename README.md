# npx create-react-app 01_basic_react
- An npx is a node package executer .
- The above executer take lots of time to initialize the react project.
- It also unnecessary downloads files or dependencies which are not required.
- The npm run start -to run the the file during the development.
- The npm run build - create build folder and it is used for production level during deployement (it create html css javascript from react and serve direclty to client).
- Clearing the file from src directly and app.js and index.js only going to remain then run.
- The react-scripts dependencies is responsible to add the script tag in index.html from behind in this case.
- In here name the file with the .jsx not required.
- In here function or component name first letter should be upperCase.
- Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</> or we can use div tag also.
- It is good practice if we give fileName of Component first letter Capital .

# npm create vite@latest
√ Project name: ... 02_basic_react_vite
√ Select a framework: » React
√ Select a variant: » JavaScript

- Vite is a bundler for react which install fast react project.
- We have to manually install node modules (npm install).
- It only add necessary dependecies for starter react project which is-> react and reactdom.
- The npm run dev - to run the project.
- The npm run build - for production level build.
- Clearing the file from src directly and App.jsx and main.jsx only going to remain then run.
- In here script tag (main.jsx) is already link by default in index.html.
- In here name the file with the .jsx.
- In here function or component name first letter should be upperCase.
- Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</> or we can use div tag also.
- It is good practice if we give fileName of Component first letter Capital .

# creating custom react
- refer to 03_customReact repo

# 02_basic_react_vite
- creating function Chai() inside the main.jsx and execute it with like <Chai/>
- we can also exeute the Chai() like Chai() but it is not advisable and not a good practice
- as we know this Chai() function parse to react like tree of of its elements like h3
- then why not directly give that tree we have created before in customReact
- it is not executing this <MyElement/> because react expecting function
- as we know it is an object then we cannot give it like that also MyElement()
- Object has to direclty use like this MyElement
- still getting error because React renderer has accepting different parameters like {type, props, value}) and we are giving custom own parameter with different syntax
- we have created AnotherElement and runnning in main.jsx but this is running successfully because in the end this also parse as object tree
- now we are creating MyElement with react syntax right form and then parse it
- to create react element we have React.createElement(type,props,value. optional(variable injected))
- MyElement has been created and parse succussfully
- Now lern how to pass variable , first go to App.js in there we learn first
- { } in this we pass variable only which is evaluated expression only not like if or loop statement
- why we only pass evaluted expression that answer we get from main.js from our clumsy code MyElement
- In Object as we know we cannot write if else, loop or evaluting expression directly that's the reason we only write evaluted expression while passing variable


