/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Route, Redirect } from 'react-router-dom';

const token = localStorage.getItem('access_token');


const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
