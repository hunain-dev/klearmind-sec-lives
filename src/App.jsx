import LocomotiveScroll from "locomotive-scroll";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Ketaminetherapy from "./pages/Ketaminetherapy/Ketaminetherapy";
import Loader from "./Components/Loader";
import Wellnesthraypy from "./pages/Wellnesthraypy/wellnesthraypy";
import Ketamineinfusion from "./pages/ketamineinfusion/ketamineinfusion";
import KlearmindDetail from "./Components/KlearmindDetail";
import Scrollertop from "./Components/Scrollertop";
import Veteransaffair from "./Components/Veteransaffair";
import Lap from "./pages/Ketaminetherapy/Lap";
import Treatmentmodalities from "./pages/Ketaminetherapy/Treatmentmodalities";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
    const scroll = new LocomotiveScroll();
return (
    <div className="">
            <Scrollertop />

          <Loader/> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ketaminetherapy" element={<Ketaminetherapy />} />
          <Route path="/Wellnesthraypy" element={<Wellnesthraypy />} />
          <Route path="/Ketamineinfusion" element={<Ketamineinfusion />} />
          <Route path="/klearmind/:id" element={<KlearmindDetail />} />
          <Route path="/Veteransaffair" element={<Veteransaffair />} />
          <Route path="/Lap" element={<Lap />} />
          <Route path="/Treatmentmodalities" element={<Treatmentmodalities />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />


        </Routes>
    </div>
  );
};

export default App;
