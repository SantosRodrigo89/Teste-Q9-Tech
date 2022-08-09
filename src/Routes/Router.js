import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../Pages/List/list";
import Register from "../Pages/Register/register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        < Route index element = {<List/>}/>
        < Route path = '/register' element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
