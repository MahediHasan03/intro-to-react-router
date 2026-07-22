import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Post/PostDetails/PostDetails.jsx';


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'laptops', Component: Laptops },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users/:usersID',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.usersID}`),
        Component: UserDetails
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postsID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsID}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: "about",
    element: <div>I am about</div>
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
