# HOW TO START THE APP

```
required : node v15.10.0

nvm use or use node v15.10.0

npm install
```

### Run local 
```
npm start
```
### Credentials

```
login : test
password : liveTest
```


# TASKS

### TODO 
1. Fork this repository
1. Create a new branch
2. Install Cypress and write a test to check if the login form is working properly
3. Suggest improvement on the login form

Suggestions :
    - Use the HTML5 "required" attribute for the login and password fields.
    - Be more specific about the type of missing field.
    - Be more specific about the incorrect field.


Login form specifications : 
* It must raise an error if one the fields is empty, and displays a message
* It must show an error message if the login and/or password is not correct
* the login button must be disabled if an error is raised
* 'Forgot password' sentence must redirect to "/forgot-password"
* The form must redirect to "/home" if the login and password are correct

4. Write some tests that you find relevant to test the video list page


***All the tests must be written in Cypress and must be in the cypress/integration folder***


# STACK :
Our application is based on React/ContextAPI.

See https://fr.reactjs.org/docs/context.html

### Generals standards :
  We tend to follow the AirBnB React Styleguide We also used Prettier an eslint for our code's linting Nearly all components are functions with Hooks. Our variables are written in camelCase. Components are written in PascalCase.

 * **WARNING** use destructured props (...props) with parsimony. Nested components with multiple destructured props can be difficult to track.
 * **WARNING** use ternary operator with parsimony. Avoid nesting ternary operators they can be difficult to track.

### Components standards :
 * <component_name>.view.jsx : the view ---> **MUST** be a stateless component
 * <component_name>.container.jsx : the container ---> connected to the store
 * <component_name>.module.scss : We use Sass module and try to avoid inline style unless necessary
 * <component_name>.constants.js : All constants used by the component are there.

#### The view :

The view is a *dumb* component (also called element) that **MUST** be a stateless component.
There is an example of a minimal view :

```
export default function <Component_name>View(props){
  return (
    <div>
      Your component view
    </div>
  );
}
```

#### The container :

The container is a *smart* component.
It provides all props that the view need.
This practice ensure that each time a props change, the view make a new render.
If you need to prevent a render on some props, you need to use memoization.

#### The style :

Each component is having his own stylesheet, this ensure more readibility and easier updating.

### File Structure

Src directory contains all the components.


```bash
src
├── Forms # All forms components
├── Layout 
├── Pages # Main components
├── Renderers # Input adapters for final forms
├── assets # Pictures and logos for the website
├── constants # Global app constants
├── context # Global app context
├── models 
│   └── User # Class representing the current app user
├── utils
│   ├── Session # Class representing a Session stored to the localstorage
│   ├── api # Api endpoints constructor
│   └── hooks # Custom react hooks 
└── widgets # UI Components

```



