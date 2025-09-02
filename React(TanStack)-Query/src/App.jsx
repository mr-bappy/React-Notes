import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRQ } from "./pages/FetchRQ";
import { AppLayout } from "./components/layout/AppLayout";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FetchUserData from "./pages/FetchUserData";
import { InfiniteScroll } from "./pages/InfiniteScroll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/trad",
        element: <FetchOld/>
      },
      {
        path: "/rq",
        element: <FetchRQ/>
      },
      {
        path: "/rq/:id",
        element: <FetchUserData/>
      },
      {
        path: "/infinite",
        element: <InfiniteScroll/>
      },
    ]
  }
])

const App = () => {

  // an instance is stored in queryClient 
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  )
}

export default App;