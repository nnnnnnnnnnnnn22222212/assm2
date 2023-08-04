import "./App.css";
import Menu from "./component/menu";
import {  Route, RouterProvider, Routes} from 'react-router-dom';

import { routes } from "./routes";
function App() {
  

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
