import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Provider, useSelector} from 'react-redux';
import store from './store/store.js';
import { Home } from './Home.js';
import { Login } from './Login.js';
import { SignUp } from './SignUp.js';
import { Api, ApiContext } from './utils/api.js';

const router = createHashRouter([
  {
    path: "",
    element:  <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign_up",
        element: <SignUp />
      },
    ]
  }
])


const Main = () => {
  const authToken = useSelector((state: ApplicationState) => state.application.authToken)
  const apiRef = useRef(new Api(authToken));

  useEffect(() => {
    if(apiRef.current) {
      apiRef.current.authToken = authToken;
    }
  }, [authToken])

  return (
    <ApiContext.Provider value={apiRef.current}>
      <RouterProvider router={router} />
    </ApiContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!!).render(
  <Provider store={store}>
    <Main />
  </Provider>
)
