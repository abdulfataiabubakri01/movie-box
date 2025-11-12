import "./App.css";
import Movie from "./components/Movie";
import Moviecard from "./components/Moviecard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import { MovieDetailsPage } from "./pages/MovieDetails";
import MainLayout from "./pages/mainLayout";
import TvSeries from "./components/TvSeries";
import { SeriesDetailsPage } from "./pages/SeriesDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
        <Route index element={<Movie />} />
        <Route path="/tvseries" element={<TvSeries />} />
        </Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="tvseries/:id" element={<SeriesDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
