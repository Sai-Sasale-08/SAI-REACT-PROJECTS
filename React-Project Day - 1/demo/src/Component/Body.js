function Body()
{
    return(
        <div>
            <h3>Understanding React Componetnt And JSX</h3>
            <p>React components are the building blocks of your application's UI. They are reusable and can be combined to create complex interfaces. Components are typically made using ES6 classes or functional components. In our example, MyComponent is an ES6 class component. It extends the React.Component class and contains a render method that returns the component's output. The output is written using JSX, a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript files. JSX makes creating and manipulating the DOM in a React application easy. It is compiled down to JavaScript during the build process.</p>
            <h3>How To Download React</h3>
            <p>Open your terminal and run the following command to install create-react-app globally:
                npm install -g create-react-app
                Once installed, run the following command to create a new React project:
                create-react-app my-react-app
                Replace my-react-app with your desired project name.

                Navigate to your newly created project directory:
                cd my-react-app
                Start the development server by running the following command:
                npm start
            </p>
        </div>
    )
}
export default Body;