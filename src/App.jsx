import Home from "./pages/Home";
import Layout from "./Layout/layout";
import { Route , Routes } from "react-router-dom";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
      <Routes>
           <Route path="/" element={<Layout><Home/></Layout>} />
           <Route path="/about" element={<Layout><About/></Layout>} />
           <Route path="/skills" element={<Layout><Skills/></Layout>} />
           <Route path="/projects" element={<Layout><Projects/></Layout>} />
            <Route path="/contact" element={<Layout><Contact/></Layout>} />
      </Routes>
  )
}

export default App