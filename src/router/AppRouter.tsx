import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout';
import { MainPage } from '~/pages/MainPage/MainPage';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: 'main',
        element: <MainPage />
      },
      {
        path: '/',
        element: <MainPage />
      }
    ]
  },
  {
    path: '*',
    element: <div>page not found</div>
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
