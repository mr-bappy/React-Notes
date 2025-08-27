import './App.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movie';
import { Contact, contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getMoviesData } from './api/GetApiData';
import { MovieDetails } from './components/UI/MovieDetails';
import { getMovieDetails } from './api/GetMovieDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/movie',
          element: <Movie/>,
          loader: getMoviesData,
          hydrateFallbackElement: <h1>Loading...</h1>
        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails/>,
          loader: getMovieDetails,
          hydrateFallbackElement: <h1>Loading...</h1>
        },
        {
          path: '/contact',
          element: <Contact/>,
          action: contactData
        },
      ]
    },
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //       <Route path="/contact" element={<Contact/>}/>
  //       <Route path="/movie" element={<Movie/>}/>
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router}/>
}

export default App
