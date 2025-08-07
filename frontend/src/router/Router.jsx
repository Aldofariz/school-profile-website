import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Academics from "../pages/Academics";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Admission from "../pages/Admission";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/academics" element={<Academics/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/admission" element={<Admission/>} />
        </Routes>
    )
}