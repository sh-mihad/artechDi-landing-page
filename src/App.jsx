
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Video from "./Pages/VideoPage/Video";

function App() {
  return (
    <section className="max-w-screen-2xl mx-auto bg-black">
    
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/fetures" element={<Video/>}/>
       </Routes>
     </BrowserRouter>

    </section>
  )
}

export default App
