import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>My Name is: {props.name}</h1>
        </div>
    )
}

const needAuthentication = (WrappedComponent) => {
    return(props) => (
        props.isAuthenticated && <WrappedComponent {...props} />
    )
};

const AuthenticatedInfo = needAuthentication(Info);

ReactDOM.render(<AuthenticatedInfo isAuthenticated={true} name="Anil" />, document.getElementById('app'));



























// import React from 'react';
// import ReactDOM from 'react-dom';

// const Info = (props) => {
//     return(
//         <div>
//         <h1>My Info</h1>
//         <p>Name: {props.name}</p>
//         </div>
//     );
// }

// //Higher Order Component
// //Advantages: Code Reusability, Prop Manipulation, Render Hijacking, Abstract State
// const requireAuthentication = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAuthenticated && <p>User Authenticated!!!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     );
// }

// const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AuthInfo isAuthenticated={true} name='Anil'/>, document.getElementById('app'));