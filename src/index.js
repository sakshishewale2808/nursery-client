import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import AddPlant from './views/AddPlant/AddPlant';
import UpdatePlant from './views/UpdatePlant/UpdatePlant';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"*",
    element:<h1>404 Not found</h1>
  },
  {
    path:"/add",
    element:<AddPlant/>
  },
  {
    path:"/Update/:id",
    element:<UpdatePlant/>
  }
])
root.render((<div>
<RouterProvider router={router}/>

</div>));