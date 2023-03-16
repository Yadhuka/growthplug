import { Route, Routes } from "react-router-dom";
import Home from "../component/home/Home";
import Movie from "../component/movie/movie";

const Router = () => {
  return (
    <Routes>
      <Route path="/" index exact element={<Home />} />
      <Route path="/movie/:id" exact element={<Movie/>}/>
    </Routes>
  );
};
export default Router;
