import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Routes/Landing';
import ResumePage from './Routes/ResumePage';
import ErrorPage from './Routes/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'resume',
      element: <ResumePage />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
