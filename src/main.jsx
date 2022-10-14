import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home, loader as homeLoader } from './pages/Home'
import { Layout } from './components/Layout'
import { NotFound } from './pages/NotFound'
import { NewClient, action as newClientAction } from './pages/NewClient'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './components/Error'
import { EditSingleClient, loader as singleClientLoader, action as singleClientAction } from './pages/EditSingleClient'
import { action as clientAction } from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: homeLoader,
        errorElement: <Error/>
      },
      {
        path: '/clients/new',
        element: <NewClient/>,
        action: newClientAction,
        errorElement: <Error/>
      },
      {
        path: '/clients/:id/edit',
        element: <EditSingleClient/>,
        loader: singleClientLoader,
        action: singleClientAction,
        errorElement: <Error/>
      },
      {
        path: '/clients/:id/delete',
        action: clientAction
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
