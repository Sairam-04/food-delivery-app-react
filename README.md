# Food Ordering App in React

    
    - Header
        -Logo
        -NavItems
    - Body
        -Search
        -Restaurant Container
            -Restaurant Card
                -Restaurant Img
                -Name of Res, Rating, Desc, cusine, del time
    
    - Footer
        -Copyrights
        -Links
        -Address
        -Contact


## Two Types of Export/Import

- Default Export/Import

    export default Component/Variable;
    import Component from "path";

- Named Export/Import

    export const Component/Variable;
    import {Component} from "path";


## React Hooks
    They are normal JS Utility functions.
    There are 2 very important Hooks
        - useState()
        - useEffect()

## useState Hook:

    - useState Hook is used to create state variables.
    - state variables maintains the state of the component
    - Syntax:
       const [name, setName] = useState(initialValue)
       - name variable is used to access the state variable
       - setName is a function that takes a value and update the State
    
    - Whenever there is change the state variable react re-renders the Component
    - React uses React Fiber Alogorithm where the react finds out the difference between two Virtual DOM's (old and new updated) and updates the actual DOM. 
    - This is also known as "Reconciliation Algorithm". It uses Diff Algorithm to find out the difference between two virtual DOM's.
    
## There are 2 types of Architecuture for building softwares
    1. Monolith:
        - Everything is bundled together. All the Code API, UI, DB Connections, Auth, Notification Services resides in one massive project with single code base.

        * Size & Complexity Limitation
        * Slow Startup
        * Full deployment is required
        * Difficult continous deployment
        * Scaling Challenges
        * Reusability Challenges

    2. Microservices:
        The idea is to split application into a set of smaller, interconnected services. Each service handles specific job for example some handle UI, notification etc. 
        Each service has it own business logic and tools. Some services talk to each other in different ways like REST. Each service is deployed in unique port.

        * Simpler Development
        * Independent Teams
        * Flexibilty in Technology
        * Continous Deployment
        * Scalable
        * Seperation of Concerns

## useEffect Hook:
    - It is a hook that lets us synchronize a component with a external system.
    - If you want to perform any operation after rendering write the code logic in useEffect hook.

    - Syntax:
        useEffect(callback function , [dependeny Array])

# Single Page Application
    - It is a type of web app that interacts with user by dynamically rewritting the current webpage rather than loading the entire new pages from server.
    - There are 2 types of Routing 
        1. Client Side Routing : 
            Routing and Navigation are managed by client within webbrowser. In React the routing is done on client side by using libraries like React-Router-DOM.

            * Faster Transitions
            * Single Page Application
            * SEO Challenges

        2. Server Side Routing : 
            The requests are made to server for requesting the pages. When a user requests a different URL, the server generates and sends new HTML Page for that Route

            * Slower Transitions
            * Traditional Websites
            * SEO Friendly