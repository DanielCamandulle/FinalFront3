import { BrowserRouter, Routes, Route} from "react-router-dom";



import Home from './routes/Home';
import Contact from './routes/Contact';
import Detail from './routes/Detail';
import Favs from './routes/Favs';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function MainLayout() {

  return(
    <div>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  ) 
}

export default MainLayout;